import logo from './logo.svg';
import './App.css';
import Login from './Components/Auth/Login/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header/Header'
import SignUp from './Components/Auth/Signup/Signup'
import DisplayUser from './Components/Admin/UserManagement/DisplayUser/DisplayUser'
import EditUser from './Components/Admin/UserManagement/EditUser/EditUser'
import AddProduct from './Components/Admin/Product Management/AddProduct/AddProduct';
import EditProduct from './Components/Admin/Product Management/Edit Product/EditProduct';
import ViewProduct from './Components/Admin/Product Management/ViewProduct/ViewProduct';
//import { Router } from 'react-router-dom';
import ProductPage from './Components/User/ProductPage/ProductPage';
import OrderPage from './Components/User/OrderPage/OrderPage';
//import BookingPage from './Components/User/BookingPage/BookingPage';

function App() {
  
  return (
    <div className="App">
      
      {/*<Router>
       <Routes>
            <Route exact path = "/user/signup" element={<SignUp/>}/>
            <Route exact path = "/admin/addproduct" element={<AddProduct/>}/>
            <Route exact path = "/admin/editproduct" element={<EditProduct/>}/>  
            <Route exact path = "/admin/viewproduct" element={<ViewProduct/>}/>  
            <Route exact path="/user/login" element={<Login/>}/>
            <Route exact path="/" element={<Navigate replace to="/user/login"/>}/>
            <Route exact path="/login" element={<Navigate replace to="/user/login"/>}/>
            <Route exact path="/admin/login" element={<Navigate replace to="/user/login"/>}/>
          </Routes>
  </Router>*/}
     <ProductPage/>
    </div>
  );
}

export default App;
