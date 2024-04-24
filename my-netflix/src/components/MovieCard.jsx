import React from 'react'
import { TMDB_IMG_URL } from '../utils/Api';
import { useDispatch } from 'react-redux';
import { getId } from '../redux/movieslice';


const MovieCard = ({posterPath,moive_id}) => {
  const dispatch=useDispatch();
  const handle_card=()=>{
    dispatch(getId(moive_id));
  }
  return (
    <div className='MovieCard' onClick={handle_card}>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="" />
    </div>
  )
};

export default MovieCard;