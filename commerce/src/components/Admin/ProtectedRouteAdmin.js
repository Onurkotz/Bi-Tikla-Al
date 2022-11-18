import React from "react";
import {Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRouteAdmin({ element, admin }) {
	const { user} = useAuth();
	return  user?.role !== "admin" ?  <Navigate to="/" />  : <Outlet />;
	
}

export default ProtectedRouteAdmin;
