import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import Context from "./utilities/Context"

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <Context>
    <BrowserRouter>
    <App />

    </BrowserRouter>
  </Context>
    )
  
