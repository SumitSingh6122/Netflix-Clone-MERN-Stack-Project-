import { useDispatch } from "react-redux";
import axios from "axios";
import {  Upcoming_Movie, options } from "../utils/Api";
import { getUpcomingMovie } from "../redux/movieslice";



const useUpcomingMovie= async () => {
    const dispatch=useDispatch();
    try {
        const res = await axios.get(Upcoming_Movie,options);
        dispatch(getUpcomingMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }


}

export default useUpcomingMovie;