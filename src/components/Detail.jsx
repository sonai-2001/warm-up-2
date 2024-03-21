import { React, useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utilities/Axios";
import { UserContext } from "../utilities/Context";

function Detail() {
  const [products, setProducts] = useContext(UserContext);
  console.log("detail");
  const x = useParams();
  const { id } = x;
  const [p, setP] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    setP(() => products.filter((item) => item.id == id)[0]);
  });
  const handleDelete=(id)=>{
           const filteredProduct=products.filter((item)=>item.id!=id)
           console.log(filteredProduct)
           setProducts(filteredProduct)
           localStorage.setItem("products",JSON.stringify(filteredProduct))
           navigate('/warm-up-2/')
  }

  return p ? (
    <>
      <div className="w-[80%] h-full  flex gap-[2vw] items-center justify-center">
        <div className="w-[30%] h-[23vw] bg-red-300  object-cover">
          <img className="w-full h-full" src={p.image}></img>
        </div>

        <div className="w-[30%]     flex flex-col justify-center">
          <h1 className="text-xl mb-3">{p.title}</h1>
          <h1 className="font-regular mb-2">{p.description}</h1>

          <h2 className="text-xs">{p.price}</h2>
          <div className="flex justify-around">
            <button className="px-2 py-1 rounded-md bg-sky-100 hover:bg-sky-200 w-fit " onClick={()=>handleDelete(id)}>
              Delete
            </button>
            <Link
              to={`/warm-up-2/edit/${id}`}
              className="px-2 py-1 rounded-md bg-sky-100 hover:bg-sky-200 w-fit "
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>erro</h1>
  );
}

export default Detail;
