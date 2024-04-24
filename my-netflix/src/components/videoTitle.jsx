import './browse.css';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='videotitle'>
        <h1> {title}</h1>
        <p >{overview}</p>
        <div className='video-btn'><button ><i class='bx bx-play'></i><span>Play</span></button><button><i class='bx bx-info-circle'></i><span>Watch More</span></button></div>
    </div>
  )};

export default VideoTitle;