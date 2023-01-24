import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Navbar({userData , logOut}) {

  const cart = useSelector(state =>state.cart.cartitem)
return <>


<nav id="header" className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top  shadow-sm">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="#">La Collection</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      {userData?<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="products">Products</Link>
        </li>
      </ul>:''}
     
      
    

       
       
        


  {
  userData? <>
<Link to='/cart' className='btn btn-outline-dark ms-2'><i className="fa fa-shopping-cart me-2"></i>Cart {cart.length}</Link>
<Link to='login'  className='btn btn-outline-dark ms-2' onClick={logOut}><i className="fa fa-user-plus me-2"></i>Logout</Link>
    
</>:''
  }
        
      
    </div>
  </div>
</nav>


</>
}
