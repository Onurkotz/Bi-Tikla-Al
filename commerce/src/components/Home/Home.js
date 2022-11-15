import React from "react";
import Navigation from "../Navigation/Navigation";
import { Box } from "@chakra-ui/react";
//import { useQuery } from "react-query";
//import { getAllProducts } from "../../api";

function Home() {
  // const { isLoading, error, data } = useQuery("products", getAllProducts);
  //if (isLoading) return "Loading...";
  //if (error) return error;
  return (
    <Box>
      <Navigation />
      Anasayfa
    </Box>
  );
}

export default Home;
