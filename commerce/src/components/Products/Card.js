import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useBasket } from "../../context/BasketContext";
import { useAuth } from "../../context/AuthContext";

function Card({ item }) {
  const { addtoBasket, items } = useBasket();
  const hasItem = items.find((data) => data._id === item._id);

  const { loggedIn } = useAuth();

  return (
    <Box bg="aqua" borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/products/${item._id}`}>
        <Box d="flex" textAlign="center">
          <Box
            fontSize="22"
            fontWeight="bold"
            mb="3"
            letterSpacing="wide"
            as="h4"
          >
            {item.title}
          </Box>
          <Box maxW="100%">
            <Image m="auto" src={item.photos[0]} alt="asd" />
          </Box>
        </Box>

        <Box mt="3" textAlign="center">
          <Box fontSize="20" fontWeight="semibold">
            {item.price} TL
          </Box>
        </Box>
      </Link>
      <Box
        mt="3"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box float="left">
          {moment(item.createdAt).locale("tr").format("DD.MM.YYYY")}
        </Box>
        {loggedIn ? (
          <Button
            w="120px"
            _hover={{ bg: "red.300" }}
            bg={!hasItem ? "#42ec6b" : "purple.300"}
            float="right"
            onClick={() => {
              addtoBasket(item, hasItem);
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
      </Box>
    </Box>
  );
}

export default Card;
