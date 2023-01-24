import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import style from "./product.module.css";
import Loading from "../Loading/Loading";



export default function Products() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  async function getproducts() {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setData(data);
    setFilter(data);
   
  }

  useEffect(() => {
    getproducts();
  }, []);

  const filterProduct = (cat)=>{
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">
                Latest Products
              </h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center  ">
            <div className="buttons d-flex justify-content-center mb-2">
              <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(`men's clothing`)}>
                Men's Clothing
              </button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(`women's clothing`)}>
                Women's Clothing
              </button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('jewelery')}>
                Jewelery's Clothing
              </button>
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('electronics')}>Electronic</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.col}>

        {filter.length>0? filter.map((product, index) => {
          return (
            <div key={index}>
              <div className={style.border}>
                <div className="card h-100 text-center mx-3 p-2 shadow-sm ">
                  <img
                    src={product.image}
                    className="card-img-top "
                    height="250px"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-danger">
                      By Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }):<Loading/>}
      </div>
    </>
  );
}

  













