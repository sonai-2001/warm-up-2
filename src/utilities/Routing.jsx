
import React from "react"
import {Route,Routes} from  "react-router-dom"
import Home from "../components/Home"
import Detail from "../components/Detail"
import Create from "../components/Create"
import Edit from "../components/Edit"
function Routing(){
   
   console.log("routing")
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
        
        )
}
export default Routing