import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const MoiveContainer = () => {
    const movie = useSelector((store) => store.movie);
    if(movie==null){
        return
    }
    return (

        <div className="MovieContainer"><MovieList title={"Popular Movie"} Movie={movie.TrendingMovie} />
        <MovieList title={"Now Playing Movie"} Movie={movie.playMovie} />
        <MovieList title={"Top Rated Movie"} Movie={movie.TopRatedMovie} />
        <MovieList title={"Upcoming  Movie"} Movie={movie.UpcomingMovie} /></div>

    )
};

export default MoiveContainer;