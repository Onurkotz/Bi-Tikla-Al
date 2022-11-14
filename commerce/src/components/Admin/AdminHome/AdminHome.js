import React from 'react'
import AdminNavigation from  "../AdminNavigation/AdminNavigation"
import Loading from "../../Loading/Loading";
import { getAllProducts } from "../../../api";
import { useQuery } from "react-query";



function AdminHome() {

  const {isLoading, isError, data} = useQuery("admin/product", getAllProducts)
  if(isLoading) return <Loading />;
  if(isError) return "An error catched."
  console.log(data)
  return (
  <AdminNavigation />
  )
}

export default AdminHome


