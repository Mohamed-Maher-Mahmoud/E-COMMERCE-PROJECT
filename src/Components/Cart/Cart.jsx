
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  ClearCart,  removeFromCart } from '../../Redux/createSlice';
import './cart.css'




 function Cart() {
  const cart=useSelector(state => state.cart.cartitem)
  const disptach=useDispatch()

const totalPrice= cart.reduce((acc,product)=>{
  acc +=product.price * product.cartQuantity
return acc
},0)
  return (
    <>
<h1 className="title pt-5 text-md-center text-sm-center my-5">Your Cart</h1>
       <button
 variant='warning'
 onClick={()=> disptach(ClearCart())}
  className=' mx-sm-auto mx-md-auto mb-3 text-center d-flex btn btn-outline-dark mb-5 '>
    Clear All Products
    </button>  
 <section className='container '>
<table className='pt=5 bordered striped hover'>
      <thead>
        <tr>
      
          
          <th>Image</th>
           <th>Price</th>
        <th>Qauntity</th>
        <th>Total </th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {cart.map(product =>(  
        
        
        
        <tr key={product.id}>
           <td><img src={product.image} alt={product.name}style={{width:"100px",height:"100px"}}/></td>
           <td>{product.price} $</td>
           <td>{product.cartQuantity} </td>
           <td>{product.cartQuantity * product.price}</td>
           <td><button className='btn btn-dark'
          onClick={()=> disptach(removeFromCart(product))}
          >Delete</button></td>
        </tr>       
        ))}
      
      </tbody>
    </table> 
    <span>
    <h4  className='total text-md-center mx-3 text-sm-center m-4'>Total Price : {totalPrice } $</h4>
    
      <Link className='nav-link text-md-center text-sm-center m-sm-auto m-md-auto'
      to='/info'>
      <button className='mb-5 btn btn-danger'>Order Now
      </button>
      </Link>
    </span> 
    </section> 


</>
  )
}
export default Cart