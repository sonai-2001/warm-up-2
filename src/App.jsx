import React from "react";
import {useState,useEffect} from "react"
import {Link,useLocation} from "react-router-dom"

import Routing from "./utilities/Routing"

function App() {
  
  const{search,pathname}=useLocation()
  return (
    <div className="w-full h-screen  flex items-center justify-center">
    {(pathname!='/' || search.length>0) && (<Link to="/" className="absolute left-[15%] top-[3%] bg-sky-100 px-2 py-1 rounded-md">Home </Link>)}
      
      <Routing/>
      
    </div>
  );

  // const[val,setVal]=useState(1)
  // useEffect(()=>{
  //   console.log("mounted")
  //   return ()=>{
  //     console.log("unmounted")
  //   }
  // },)
  // console.log("render with",val)
  // const changeVal=(e)=>{
  //   console.log("clicked")  
  //   setVal((prev)=>prev+1)
  // } 
  // // atfirst clicked once it clicked it changes the state value so the component gete rerender and it  prints render with new value of val then it 
  // //  1) if no 2nd params of useEffect unmounted mounted after rerender
  // //  2) if 2nd params is [] then nothing will print after rerender ** for ofirst time it will certainly mounted
  // //  3) if  2nd params is like [val] then if any value change of val after re-render
  // //  unmounted mounted 
  // return(
  //   <div>
  //   <span className='mr-10'>{val}</span>
  //   <button onClick={changeVal}>increase</button>
  //   </div>

  // )
}
export default App;
