import "./home.scss"
import Navbar from "../navbar/Navbar";
import Features from "../features/Features";
import List from "../movieList/List";
import {useState, useEffect} from "react";
import axios from "axios"
const Home=({type})=>{
    //fetch data from API
    const [lists, setList]=useState([])
    const [genre, setGenre]=useState(null)
    useEffect(()=>{
        const getRandomList = async ()=> {
try{
const res=await axios.get(
 `http://localhost:8800/api/lists${type ? "?type=" +type : ""}${
    genre ? "&genre=" +genre :""}`,
    {
        headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdiNDNiNTQwMDExYTg2MDI5NmY0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTA4MTAyOCwiZXhwIjoxNjc1Njg1ODI4fQ.uZXhMc8TpXQsVLEemZ3s_xQSiRlcfloXb4JT6iTylfE"
        }
    })
console.log(res)
//setList(response.data)
}catch(err){
    console.log(err)
}
        };
        getRandomList();
    }, [type, genre])
    return(
        <div className="home">
    
        <Navbar />
        {/* to decide if we are in movies or series page, create a prop*/}
        <Features type={type}/>
        {/* Each List component has ListItem component
        and each list Component has 10 list Component*/}
        <List/>
        <List/>
        <List/>
        <List/>
        </div>
        
    )
}
export default Home;