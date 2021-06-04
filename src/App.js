import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header   from './components/Header'
import Home     from './components/Home'
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ProductIndex from './components/ProductIndex';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Header/>
    <h1> Hammad's Foot Wear </h1>
    <Routes>
      <Route path="/"      element={<Home/>}> </Route>
      <Route path="products"  element={<Products/>}> 

        <Route path="/"       element={<ProductIndex />}> </Route>
        <Route path=":productID" element={<ProductDetails />}> </Route>

      </Route>
      <Route path="*"         element={<NotFound/>}> </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
