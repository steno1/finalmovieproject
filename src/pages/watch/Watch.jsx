import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {Link,useLocation} from "react-router-dom"
const Watch=()=>{
    const location = useLocation();
const movie=location.state.watchMovies
    
    return(
        
        <div className="watch">
        <Link to="/">
<div className="back">
<ArrowBackOutlinedIcon/>
Home


</div>
</Link>
<video className="video"
 autoPlay
  progress 
  controls 
  src={movie.trailer}

  />
        </div>
        
        
    )
}

export default Watch;