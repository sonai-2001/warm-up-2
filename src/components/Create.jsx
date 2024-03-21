import React, { useContext, useState } from "react";
import { UserContext } from "../utilities/Context";
import { nanoid } from "nanoid";

function Create() {
     const [image,setImage]=useState('')
     const [title,setTitle]=useState('')
     const [price,setPrice]=useState('')
     const [desc,setDesc]=useState('')
     const [category,setCategory]=useState('')
     const [products,setProducts]=useContext(UserContext)

     const handleImage=(e)=>{
          setImage(e.target.value)
     }
     const handleTitle=(e)=>{
          setTitle(e.target.value)
     }
     const handlePrice=(e)=>{
          setPrice(e.target.value)
     }
     const handleCategory=(e)=>{
          setCategory(e.target.value)
     }
     
     const handleDesc=(e)=>{
          setDesc(e.target.value)
     }
     

     const handleSubmit=(e)=>{
          e.preventDefault()
          const product={
            image:image,
            title:title,
            price:price,
            desc:desc,
            category:category,
            id:nanoid()
          }
          setProducts([...products,product])


          localStorage.setItem('products',JSON.stringify([...products,product]))
          setImage('')
          setTitle('')
          setPrice('')
          setDesc('')
          setCategory('')
     }
     
    return (
    <form className="w-full h-screen p-4 flex flex-col items-center justify-center gap-10 " onSubmit={handleSubmit}>
      \
      <div className="flex   justify-start w-1/2">
        <h1>Enter details</h1>
      </div>
      <input className="w-1/2 bg-zinc-200" type="url" placeholder="Image" onChange={handleImage} value={image} />
      <div className="w-1/2 flex justify-between">
        <input
          className="w-[45%] bg-zinc-200"
          type="text"
          placeholder="title"
          onChange={handleTitle}
          value={title}
        />
        <input
          className="w-[45%] bg-zinc-200"
          type="number"
          placeholder="price"
          onChange={handlePrice}
          value={price}
        />
      </div>
      <input
          className="w-1/2 bg-zinc-200"
          type="text"
          placeholder="category"
          onChange={handleCategory}
          value={category}
        />
      <textarea
        className="w-1/2 bg-zinc-200"
        rows="10"
        placeholder="description"
        onChange={handleDesc}
        value={desc}
      ></textarea>
      <div className="w-1/2 flex justify-start ">
        <input
          type="submit"
          value="create"
          className="px-2 py-1 rounded-md bg-zinc-200  hover:bg-zinc-300 cursor-pointer"
        />
      </div>
    </form>
  );
}
export default Create;
