import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api";

function Products() {
  const { isLoading, error, data } = useQuery("products", getAllProducts);
  if (isLoading) return "Loading...";
  if (error) return error;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p={10}>
      {data.map((item, key) => (
        <Card key={key} item={item} />
      ))}
    </Grid>
  );
}

export default Products;
