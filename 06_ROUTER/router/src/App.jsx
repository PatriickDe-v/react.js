import { useState } from "react";
import "./App.css";
// pages
import Home from "./pages/Home";
import About from "./pages/About";

// components
import Navbar from "./components/navbar";
import Product from "./pages/Product";

// 1 - Configurando react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinâmica*/}
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
