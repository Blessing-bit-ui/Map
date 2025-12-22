import logo from './logo.svg';
import './App.css';
import Product from './product';
import Price from "./price"
import Login from "./login"
import PageNotFound from "./PageNotFound"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="price" element={<Price />} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element ={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
