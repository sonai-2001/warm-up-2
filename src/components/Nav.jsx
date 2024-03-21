
import {React,useContext} from "react"
import { Link } from "react-router-dom";
import {UserContext} from"../utilities/Context"
function Nav(){
 
  const[products]= useContext(UserContext)
 
 const category=products.reduce((acc,item)=>[...acc,item.category],[])
 
 const distCategory=[... new Set(category)]
//  console.log(distCategory)

 const color=()=>{
  return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},1)`
 }
  
  return (
    <div className="  sidebar w-[20%] h-full bg-white p-4 px-1 flex flex-col items-start justify-start">
        <Link to="/warm-up-2/create" className="hover:scale-110 bg-sky-100 p-2 inline-block w-[60%] text-center border ">
          
          Add Item
        </Link>

        <div className=" w-[100%] mt-[5%]">
          <h1 className="mb-2">Category</h1>
          {distCategory.map((item,index)=>{
            return (
              <Link  to={`?category=${item}`} key={index} className="flex items-center justufy-center gap-[2%] mb-2 hover:text-red-300">
            <div style={
              {backgroundColor:color()}
            } className=" w-[1vw] h-[1vw]  rounded-full "></div>
            {item}
          </Link>
            )
          })}
          <Link  to="/warm-up-2/"  className="flex items-center justufy-center gap-[2%] mb-2 hover:text-red-300">
            <div style={
              {backgroundColor:color()}
            } className=" w-[1vw] h-[1vw]  rounded-full "></div>
           All
          </Link>


          
        </div>
      </div>
)
}

export default Nav