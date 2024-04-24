import { useSelector } from 'react-redux';
import useTrailerMovie from '../hooks/useTrailerMovie';
import './browse.css';


const Videobackground = ({ id }) => {
 
    useTrailerMovie(id);
    const vid = useSelector((store) => store.movie?.trailerMovie);
    const video=null;
    if(video===""){
      return
    }
   
    if(vid==null){
      return
    }

    
    const videoUrl = video ? `https://www.youtube.com/embed/${video}?autoplay=1&mute=1&controls=0&loop=1` : `https://www.youtube.com/embed/${vid?.key}?autoplay=1&mute=1&controls=0&loop=1`;

    return (
        <div className='video'>
            <iframe
                src={videoUrl}
                title="Video player"
                frameBorder="0"
                allowFullScreen 
                loop
            ></iframe>
        </div>
    );
};

export default Videobackground;
