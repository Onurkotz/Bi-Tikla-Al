import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api";

function Home() {

  const { isLoading, error, data } = useQuery("products", getAllProducts);
  if (isLoading) return "Loading...";
  if (error) return error;
  return <div>Anasayfa 
    {
      data.length
    }
  </div>;
}

export default Home;
