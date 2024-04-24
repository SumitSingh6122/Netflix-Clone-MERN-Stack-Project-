import { useDispatch } from "react-redux";
import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/Api";
import { getPlayMovie } from "../redux/movieslice";
import { useEffect } from "react";
const usePlaymovie=() => {
    const dispatch=useDispatch();
useEffect(()=>{
    
    const playmovie=async()=>{
        try {
            const res = await axios.get(Now_Playing_Movie,options);
            dispatch(getPlayMovie(res.data.results));
        } catch (error) {
            console.log(error);
        }
        };
playmovie();
},[dispatch]);
   

}

export default usePlaymovie;