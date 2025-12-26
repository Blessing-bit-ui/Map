import logo from "./logo.svg";
import "./App.css";
import Product from "./pages/product";
import Price from "./pages/price";
import Login from "./pages/login";
import Cities from "./pages/Cities";
import HomePage from "./pages/HomePage";
import PageNotFound from "./PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="app" element={<Cities/>}/>
        <Route path="product" element={<Product />} />
        <Route path="price" element={<Price />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
