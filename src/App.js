import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./Components/AboutUs/Aboutus";
import AddBlog from "./Components/AddBlog/AddBlog";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
