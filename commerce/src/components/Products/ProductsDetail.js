import React from "react";
import Navigation from "../Navigation/Navigation";
import { useQuery } from "@tanstack/react-query";
import { product } from "../../api";
import { useParams, Link } from "react-router-dom";
import { Box, Grid, GridItem, Button, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import Loading from "../Loading/Loading";
import { useBasket } from "../../context/BasketContext";
import { useAuth } from "../../context/AuthContext";
import "../../App.css";

function ProductsDetail() {
  const { id } = useParams();
  const { addtoBasket, items } = useBasket();
  const { loggedIn } = useAuth();

  const { isLoading, error, data } = useQuery(["product", id], () =>
    product(id)
  );
  if (isLoading) return <Loading />;
  if (error) return error;
  console.log(data);

  const hasItem = items.find((item) => item._id === id); // items içinde bu ürünün id'si ile eşleşen bi ürün varsa bul.

  const images = data.photos.map((url) => ({ original: url }));
  return (
    <Box>
      <Navigation />

      <Grid
        h="800px"
        templateRows="repeat(3, 0fr)"
        templateColumns="repeat(5, 1fr)"
        gap={5}
        pl="40"
        pr="40"
        mt="20"
      >
        <GridItem
          h="50px"
          colSpan={5}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontWeight="semibold" ml="3" fontSize="40px">
            {data.title}
          </Text>
          {loggedIn ? (
            <Button
              w="120px"
              _hover={{ bg: "red.300" }}
              bg={!hasItem ? "#42ec6b" : "purple.300"}
              float="right"
              onClick={() => {
                addtoBasket(data, hasItem);
              }}
            >
              {hasItem ? "Kaldır" : "Sepete At"}
            </Button>
          ) : (
            <Link to="/auth/login">
              <Button
                w="120px"
                _hover={{ bg: "red.300" }}
                bg={!hasItem ? "#42ec6b" : "purple.300"}
                float="right"
              >
                Sepete At
              </Button>
            </Link>
          )}
        </GridItem>
        <GridItem h="850px" colSpan={3}>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
          />
        </GridItem>
        <GridItem h="600px" colSpan={2}>
          <Text
            fontWeight="semibold"
            textDecoration="underline"
            ml="3"
            mt="3"
            fontSize="30px"
          >
            Ürün Detayı
          </Text>
          <Text ml="3" letterSpacing="tighter" mt="3" fontSize="20px">
            {data.description}
          </Text>
          <Text fontWeight="bold" ml="3" mt="10" fontSize="35px">
            {data.price} ₺
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ProductsDetail;
