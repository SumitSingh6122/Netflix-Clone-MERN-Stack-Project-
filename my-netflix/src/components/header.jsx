
import logo from '../assets/logo.svg';
import { useSelector } from 'react-redux';
import './home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'
import { API_END_POINT } from '../utils/Api';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice';

const Header = () => {
  const navigation=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((state) => state.app?.user);

 const logout= async()=>{
  try {
    const res=await axios.get(`${API_END_POINT}/logout`);
      if(res.data.success){
        navigation("/body");
        dispatch(setUser(null));
        toast.success(res.data.message);

      }
    
  } catch (error) {
    console.log(error)
  }


 }
  return (
    <div>
      <div className="head">
        <nav>
          <span><img width="53" src={logo} alt="" /></span>
          <div className="btndiv">
            
            {user?<><span className="username"><i class='bx bxs-check-shield'></i><p>{user.fullname}</p></span><button className="btn-signIn" onClick={logout}  >Log out</button> <span className="search"><i class='bx bx-search-alt-2'></i></span></>:<><select className="btn">
              <option value="value1">English</option>
              <option value="value2">Hindi</option>
            </select><a href="/body"> <button className="btn-signIn"  >Sign In</button></a></>}
           
          </div>
        </nav>
    
      </div>
 
    </div>
  )
}

export default Header;