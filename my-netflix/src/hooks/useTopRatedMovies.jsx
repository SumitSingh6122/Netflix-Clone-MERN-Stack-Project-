import { useDispatch} from "react-redux";
import axios from "axios";
import {  Top_Rated_Movie, options } from "../utils/Api";
import { getTopRatedMovie} from "../redux/movieslice";
const useTopRatedMovie = async () => {
    const dispatch=useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie,options);
        dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }


}

export default useTopRatedMovie;