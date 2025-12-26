import logo from "./logo.svg";
import "./App.css";
import Product from "./pages/product";
import Price from "./pages/price";
import Login from "./pages/login";
import Cities from "./component/Cities";
import HomePage from "./pages/HomePage";
import AppNav from "./component/AppNav";
import PageNotFound from "./PageNotFound";
import Countries from "./component/Countries";
import { CityProvider } from "./ContextProvider/CityProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CityProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppNav />}/>
          <Route path="app/cities" element={<Cities />} />
          <Route path="app/countries" element={<Countries />} />
          <Route path="product" element={<Product />} />
          <Route path="price" element={<Price />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CityProvider>
  );
}

export default App;
