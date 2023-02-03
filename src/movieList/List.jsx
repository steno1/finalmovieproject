import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listItem/listItem";
import { useRef, useState } from "react";

const List=({listing})=>{
    //make the slider not to overflow
const [slideNumber, setSlideNumber]=useState(0);

//make the arrow at left to appear when slider moves on click
const [isMoved, setIsMoved]=useState(false);


    const listRef=useRef()//use in getting the container Div
    const handleClick=(direction)=>{
        //when button is clicked setIsMoved=true
        setIsMoved(true);
        let distance=listRef.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber>0){
            setSlideNumber(slideNumber -1);
listRef.current.style.transform=`translateX(${230+distance}px)`
        }
        if(direction==="right" && slideNumber<5){
            setSlideNumber(slideNumber +1)
            listRef.current.style.transform=`translateX(${-230+distance}px)`
                    }
    }
    return(
        <div className="list">
<span className="listTitle">{listing.title}</span>
<div className="wrapper">
<ArrowBackIosNewOutlinedIcon className="sliderArrow left"
    onClick={()=>handleClick("left")}
    style={{display:!isMoved && "none"}}//if slide doesnt move, hide arrow
/>
<div className="container" ref={listRef}>
{/* Each listItem in List contains a movie, 
so each of the list component has 10 listItem, containing movies*/}

{listing.content.map((itemId, i)=>{
 //listing.content is the movie id, which is =itemId 
 // index here may not be necessary again, because of itemId 
   return (
    <ListItem index={i} itemId={itemId}/>
   ) 
})}

</div>
<ArrowForwardIosOutlinedIcon className="sliderArrow right"
    onClick={()=>handleClick("right")}
/>
</div>
        </div>
    )
}
export default List;