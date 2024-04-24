import React from 'react';
import VideoTitle from './videoTitle';
import Videobackground from './videobackground';
import './browse.css';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.playMovie);

  
 
  if (!movie) {
    return 
  }

  const randomIndex = Math.floor(Math.random() * movie?.length);
  const { overview, id, title } = movie[randomIndex];

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <Videobackground id={id}  />
    </div>
  );
};

export default MainContainer;
