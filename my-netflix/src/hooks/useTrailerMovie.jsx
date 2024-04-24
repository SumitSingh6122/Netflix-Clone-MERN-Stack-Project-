import axios from "axios";
import { options } from "../utils/Api";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieslice";
import { useEffect } from "react";

   const useTrailerMovie = async(id) => {
      const dispatch=useDispatch();
  
useEffect(()=>{
   const getmovie=async()=>{ 
   try {
      const res= await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`,options);
      const trailer = res?.data?.results?.filter((item) => {
         return item.type === "Trailer";
       })
       dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
      console.log(res);
   } catch (error) {
      console.log(error);
   }
   }
   getmovie();
},[dispatch,id]) 
  
  };
  export default useTrailerMovie;


