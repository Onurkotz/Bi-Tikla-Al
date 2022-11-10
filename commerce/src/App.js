import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import ProductsDetail from "./components/Products/ProductsDetail";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/Auth/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

function App() {
  return (
    <div>
      <Router>
        <Navigation />  
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
						<Route path="/auth/profile" element={<Profile />} />
					</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
