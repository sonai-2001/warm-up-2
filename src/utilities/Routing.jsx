
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
            <Route path="/warm-up-2" element={<Home/>} />
            <Route path="/warm-up-2/detail/:id" element={<Detail/>} />
            <Route path="/warm-up-2/create" element={<Create/>} />
            <Route path="/warm-up-2/edit/:id" element={<Edit/>} />
        </Routes>
        
        )
}
export default Routing