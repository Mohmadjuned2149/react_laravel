import logo from './logo.svg';
import './App.css';
import React from 'react';
import Product from './Product';
import Nav1 from './Nav1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';

function App() {
  
  return (
    <>
     <BrowserRouter>
   <Nav1/>
      <Routes>
        <Route exact path="/list" element={<Product/>}/>
        <Route exact path="/addProduct" element={<AddProduct />} />
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
