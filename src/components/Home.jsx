
import {React,useContext,useState,useEffect} from "react"
import Nav from "./Nav"
import {Link,useLocation} from "react-router-dom"
import {UserContext} from "../utilities/Context"
import axios from "../utilities/Axios"


function Home (){
    console.log("home")
  const [products]=useContext(UserContext)
  const [newp,setNewp]=useState(null)


  const {search}=useLocation()
 const splitedSearch= search.split("=")[1]
 const category=decodeURIComponent(splitedSearch)
 
 
 
 
 useEffect(()=>{
 console.log("use")
  if(category!="undefined"){
    setNewp(()=>{
      return products.filter((item,index)=>item.category==category)
    })
  }
  if(category=="undefined"){
    setNewp(products)
  }
 },[category,products])
  
  return newp &&(
     <>
     <Nav />
     
     <div className=" home overflow-x-auto overflow-y-auto flex flex-wrap gap-[10%] w-[75%] h-full bg-zinc-200 p-6">
       
       {newp && newp.map((item,id)=>{
         
     return (
      <Link  to={`/warm-up-2/detail/${item.id}`} key={id} className=" cards rounded-md overflow-hidden w-[18vw] bg-white h-[20vw] hover:scale-110">
      <div
        className=" image w-full h-[80%] bg-contain mb-2"
        style={{
          background:
            `url(${item.image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <h1 className=" text-center text-[80%] hover:text-blue-200 ">{item.title}</h1>
    </Link>
     )
})}
       
      </div>
     </>
    )
}
export default Home