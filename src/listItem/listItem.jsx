//this is the movies, contained in the list
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import axios from "axios";
export default function ListItem({index, itemId}){
  const [isHovered, setIsHovered]=useState(false)
  const [movies, setMovies]=useState({})
useEffect(()=>{
const getMovies= async() => {
  try{
const res= await axios.get(`http://localhost:8800/api/movies/find/${itemId}`, {
  headers:{
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdiNDNiNTQwMDExYTg2MDI5NmY0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTA4MTAyOCwiZXhwIjoxNjc1Njg1ODI4fQ.uZXhMc8TpXQsVLEemZ3s_xQSiRlcfloXb4JT6iTylfE" 
  },
});
setMovies(res.data);
 
}catch(err){
    console.log(err)
  }
}
getMovies();
}, [itemId])

  
  return (
<Link to ="/watch" state={{watchMovies:movies}} >
    <div className="listItem"
     style={{left:isHovered && index * 225-50+ index *2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
<img src={movies.img} alt=""/>
  {isHovered && (
    <>
    <video src={movies.trailer} autoPlay={true} loop/>
  
  {/* listItem  general information */}  
<div className="info">
    <div className="icons">
<PlayArrowIcon className="icon"/>
<AddIcon className="icon"/>
<ThumbUpOutlinedIcon className="icon"/>
<ThumbDownAltOutlinedIcon className="icon" />
    </div>

    <div className="itemInfoTop">
<span>{movies.duration}</span>
<span className="limit">{movies.limit}</span>
<span>{movies.year}</span>
    </div>  

    <div className="desc">
{movies.desc}
    </div>

    <div className="genre">{movies.genre}
    </div>
      </div>
    
    </>
  )}
  
    </div>
    </Link>
    
  ) 
}
