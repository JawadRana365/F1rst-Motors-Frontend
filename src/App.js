import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/authentication/Login';
import ProductsListing from './pages/products/ProductsListing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setToken } from './redux/admin/tokenSlice';
import CreateProduct from './pages/products/CreateProduct';
import ProductDetails from './pages/products/ProductDetails';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setToken(localStorage.getItem('loginToken')))
  },[])
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductsListing />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/add-product" element={<CreateProduct />} />
          <Route exact path="/product/details/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
