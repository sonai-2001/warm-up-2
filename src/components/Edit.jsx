
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../utilities/Context"
import { useNavigate, useParams } from "react-router-dom"
function Edit(){
   
     
    const [product,setproduct]= useState({
         image:'',
         title:'',
         price:'',
         desc:"",
         category:""
     })
     const [products,setProducts]=useContext(UserContext)
    const{id}= useParams()
    const Navigate=useNavigate()
     useEffect(()=>{
           setproduct(()=>{
            const obj= products.filter((item)=>item.id==id)[0]
                        return obj
           })
     },[id])
     const handleChange=(e)=>{
         setproduct({...product,[e.target.name]:e.target.value})
     }

     
     

     const handleSubmit=(e)=>{
          e.preventDefault()
          
        const pi=  products.findIndex((item)=>item.id==id)
        const copyProducts=[...products]
        copyProducts[pi]={...copyProducts[pi],...product}
        setProducts(copyProducts)
        localStorage.setItem('products',JSON.stringify(copyProducts))
        
        Navigate('/warm-up-2/')

          
     }
    
    
    
    return (
        <form className="w-full h-screen p-4 flex flex-col items-center justify-center gap-10 " onSubmit={handleSubmit}>
      \
      <div className="flex   justify-start w-1/2">
        <h1>Enter details</h1>
      </div>
      <input className="w-1/2 bg-zinc-200" type="url" placeholder="Image" onChange={handleChange} name="image" value={product.image} />
      <div className="w-1/2 flex justify-between">
        <input
          className="w-[45%] bg-zinc-200"
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
          value={product.title}
        />
        <input
          className="w-[45%] bg-zinc-200"
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
          value={product.price}
        />
      </div>
      <input
          className="w-1/2 bg-zinc-200"
          type="text"
          placeholder="category"
          onChange={handleChange}
          name="category"
          value={product.category}
        />
      <textarea
        className="w-1/2 bg-zinc-200"
        rows="10"
        placeholder="description"
        onChange={handleChange}
        name="description"
        value={product.description}
      ></textarea>
      <div className="w-1/2 flex justify-start ">
        <input
          type="submit"
          value="create"
          className="px-2 py-1 rounded-md bg-zinc-200  hover:bg-zinc-300 cursor-pointer"
        />
      </div>
    </form>
    )
}
export default Edit 
