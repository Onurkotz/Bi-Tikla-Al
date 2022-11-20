import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import ProductsDetail from "./components/Products/ProductsDetail";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/Auth/Profile";
import Basket from "./components/Auth/Basket";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminHome from "./components/Admin/AdminHome";
import ProtectedRouteAdmin from "./components/Admin/ProtectedRouteAdmin";
import AdminOrder from "./components/Admin/AdminOrder";
import AdminNewProduct from "./components/Admin/AdminNewProduct";
import AdminEditProduct from "./components/Admin/AdminEditProduct";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="*" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/auth/profile" element={<Profile />} />
            <Route path="/auth/profile/basket" element={<Basket />} />
          </Route>
          <Route element={<ProtectedRouteAdmin />}>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/products/:id" element={<AdminEditProduct />} />
            <Route path="/admin/order" element={<AdminOrder />} />
            <Route path="/admin/new" element={<AdminNewProduct />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
