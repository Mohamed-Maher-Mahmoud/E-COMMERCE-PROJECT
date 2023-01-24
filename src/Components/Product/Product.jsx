import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addtoCart } from "../../Redux/createSlice";


export default function Product() {

  
  const dispatch = useDispatch();
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  





  async function getproducts() {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setproduct(data);
    
    
  }

  useEffect(() => {
    getproducts();
  }, []);

  

  
  return ( 

  <>

<div className="container">
   <div className="row my-5">
   
      <div className="col-md-6 my-5 ">
        <img src={product.image} alt={product.title} height='400px' width='400px'/>
      </div>
      
      <div className="col-md-6 my-5">
        <h4 className="text-upercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bold">Rating {product.rating && product.rating.rate}
        <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>

        <button onClick= {()=>dispatch(addtoCart(product))} className="btn btn-outline-dark py-2 mx-3 " >Add to Cart</button>
        <Link to='/cart' className="btn btn-dark py-2">Go to Cart</Link>
    </div>

      </div>
    
        </div>
        

  


  



     
  </>

  );
  
  
  
  
}

 