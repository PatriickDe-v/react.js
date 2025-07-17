import { useState } from "react";
import "./App.css";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// components
import Navbar from "./components/navbar";
import Product from "./pages/Product";

// 1 - Configurando react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Info from "./pages/Info";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - search*/}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinâmica*/}
          <Route path="/products/:id" element={<Product />} />
          {/* neste route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - Search*/}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect*/}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* no match route*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
