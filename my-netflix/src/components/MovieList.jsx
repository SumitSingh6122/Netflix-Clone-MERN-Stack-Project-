
import MovieCard from './MovieCard'
import './browse.css';

const MovieList = ({title,Movie}) => {
    
    return (
        <div className='MovieList'>
            <h1>{title}</h1>
            <div className='movie-list' >
            {
                Movie &&Movie.map((movie)=>{
                   return (<MovieCard key={movie?.id} movie_id={movie.id} posterPath={movie.poster_path}/> )
                
                })};
          

            </div>
        </div>
    )
};

export default MovieList;