import React from 'react'
import { useEffect,useState } from 'react'
import { imageUrl,API_KEY } from '../../Constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
function Rowpost(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId]= useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  },)
  //to play youtube trailor
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.lenght!==0){
        setUrlId(response.data.results[0])
      }
    }).catch(err=>{
      alert('Trailor Not Available')
    })
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
    autoplay: 1,
    },
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small-poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
      </div>
      { urlId && <Youtube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default Rowpost
