import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { useEffect, useState } from 'react';
import {Offline} from 'react-detect-offline';
import jwtDecode from 'jwt-decode'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ErrorPage from './Components/ErrorPage/ErrorPage';






 function App() {

  useEffect(()=>{

    if(localStorage.getItem('userToken') !== null) {

      saveUserData();

    }

  },[])

  const [userData, setuserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken'); 
  let decodedToken =  jwtDecode(encodedToken);
  setuserData(decodedToken); 
  }
  
  
  

  let routers = createBrowserRouter([
  {path:'' , element:<Layout setuserData={setuserData} userData={userData} /> , children:[
  {index:true , element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
  {path:'products' , element:<ProtectedRoute userData={userData}><Products/></ProtectedRoute> },
  {path:'products/:id' , element:<ProtectedRoute userData={userData}><Product/></ProtectedRoute>},
  {path:'cart' , element:<ProtectedRoute userData={userData}><Cart/></ProtectedRoute>},
  {path:'register' , element:<Register/>},
  {path:'*' , element:<ErrorPage/>},
  {path:'login' , element:<Login saveUserData={saveUserData}/>}
  
    ]}
  ])
return <>


<Provider store={store}>
<Offline> <div className='offline'>You Are Offline </div> </Offline>
  <RouterProvider router={routers}/>
</Provider>

  

  </>
}

export default App;
