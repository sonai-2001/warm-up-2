

import {createContext ,useState, useEffect}  from "react"
import axios from "./Axios"

export const UserContext=createContext()

 function Context(props){
  console.log("context")  
  const[products,setProducts]=useState(JSON.parse(localStorage.getItem("products"))||[])

    
    return (
        <UserContext.Provider value={[products,setProducts]}>{props.children}</UserContext.Provider>    
    )
}

export default Context 