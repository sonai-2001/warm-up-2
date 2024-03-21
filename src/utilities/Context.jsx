

import {createContext ,useState, useEffect}  from "react"
import axios from "./Axios"

export const UserContext=createContext()

 function Context(props){
  console.log("context")  
  const[products,setProducts]=useState(JSON.parse(localStorage.getItem("products"))||[])

//    const getApi=async ()=>{
//      const{data}=   await axios.get("/products")
//      setProducts(data)
//    }

//     useEffect(()=>{
//       getApi()
//     },[])
    return (
        <UserContext.Provider value={[products,setProducts]}>{props.children}</UserContext.Provider>    
    )
}

export default Context 