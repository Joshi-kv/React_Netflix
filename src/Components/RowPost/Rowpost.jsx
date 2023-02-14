import React from 'react'
import { useEffect,useState } from 'react'
import { imageUrl } from '../../Constants/constants'
import axios from '../../axios'
function Rowpost(props) {
  const [movie,setMovie] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  },[])
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj)=>
          <img className={props.isSmall ? 'small-poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
        </div>
    </div>
  )
}

export default Rowpost
