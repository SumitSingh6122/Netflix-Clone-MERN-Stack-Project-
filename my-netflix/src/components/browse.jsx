import Header from "./header";
import MainContainer from "./MainContainer";
import MoiveContainer from "./MoiveContainer";
import './browse.css';
import usePlaymovie from "../hooks/usePlaymovies";
import useTopRatedMovie from "../hooks/useTopRatedMovies";
import useUpcomingMovie from "../hooks/useUpcomingMovies";
import useTrendingMovie from "../hooks/useTrendingMovie";
import Footer from "./footer";

const Browse=()=>{
  
    usePlaymovie();
    useTopRatedMovie();
    useUpcomingMovie();
    useTrendingMovie();
    return(
        <div>
        <Header/>
       <div>
        <MainContainer/>
        <MoiveContainer/>
       
       </div>
        <Footer/>
        </div>
    );
    
}
export default Browse;