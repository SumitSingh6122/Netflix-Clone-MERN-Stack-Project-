import axios from "axios";
import { options } from "../utils/Api";
import { useDispatch } from "react-redux";
import { getId } from "../redux/movieslice";
import { useEffect } from "react";

   const useclickOnPlay= async(moive_id) => {
      const dispatch=useDispatch();
  
useEffect(()=>{
   const getmovie=async()=>{ 
   try {
      const res= await axios.get(`https://api.themoviedb.org/3/movie/${moive_id}/videos`,options);
      const trailer = res?.data?.results?.filter((item) => {
         return item.type === "Trailer";
       })
       dispatch(ftt(trailer.length > 0 ? trailer[0] : res.data.results[0]));
      console.log(res);
   } catch (error) {
      console.log(error);
   }
   }
   getmovie();
},[dispatch,moive_id]) 
  
  };
  export default useclickOnPlay;


