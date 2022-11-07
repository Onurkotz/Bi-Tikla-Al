import React from "react";
import { useQuery } from "react-query";
import { product } from "../../api";
import { useParams } from "react-router-dom";
import { Grid, GridItem, Box, Image, Button, Text } from "@chakra-ui/react";

function ProductsDetail() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["product", id], () =>
    product(id)
  );
  if (isLoading) return "Loading...";
  if (error) return error;
  console.log(data);
  return (
    <div>
      <Grid
        h="800px"
        templateRows="repeat(3, 0fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
        p="10"
      >
        <GridItem
          h="50px"
          colSpan={5}
          bg="blue"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontWeight="semibold" ml="3" fontSize="40px">
            {data.title}
          </Text>
          <Button mr="3" bg="#42ec6b">
            Sepete At
          </Button>
        </GridItem>
        <GridItem h="600px" colSpan={3} bg="tomato">
            
        </GridItem>
        <GridItem h="600px" colSpan={2} bg="blue">
            <Text fontWeight="semibold" textDecoration="underline" ml="3"  mt="3" fontSize="30px">Ürün Detayı</Text>
            <Text ml="3" letterSpacing="tighter" mt="3" fontSize="20px">{data.description}</Text>
            <Text fontWeight="bold" ml="3"  mt="10" fontSize="35px">{data.price} ₺</Text>
        </GridItem>
      </Grid>
    </div>
  );
}

export default ProductsDetail;
