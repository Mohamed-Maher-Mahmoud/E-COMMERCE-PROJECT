import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';


export default function Layout({userData , setuserData}) {

  let navigate = useNavigate();
  
  function logOut() {
    localStorage.removeItem('userToken');
    setuserData(null);
    navigate('/login');
     
  }
  
  return <>
  <Navbar logOut={logOut} userData={userData} />

  
  <Outlet>
    
    </Outlet>
  
  
    
 
 

  </>
  
}