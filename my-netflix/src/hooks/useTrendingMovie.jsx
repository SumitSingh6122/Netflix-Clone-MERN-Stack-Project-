import { useDispatch } from "react-redux";
import axios from "axios";
import { Popular_Movie, options } from "../utils/Api";
import { getTrendingMovie } from "../redux/movieslice";


const useTrendingMovie = async () => {
    const dispatch=useDispatch();
    try {
        const res = await axios.get(Popular_Movie,options);
        dispatch(getTrendingMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }


}

export default useTrendingMovie;