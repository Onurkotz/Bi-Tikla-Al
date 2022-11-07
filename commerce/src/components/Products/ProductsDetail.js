import React from "react";
import { useQuery } from "react-query";
import { product } from "../../api";
import { useParams } from "react-router-dom";

function ProductsDetail() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["product", id], () =>
    product(id)
  );
  if (isLoading) return "Loading...";
  if (error) return error;
  console.log(data);
  return <div> {id} </div>;
}

export default ProductsDetail;
