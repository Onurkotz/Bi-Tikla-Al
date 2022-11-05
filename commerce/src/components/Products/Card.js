import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";

function Card({ item }) {
  return (
    <Box bg="aqua" borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#">
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
        <Button bg="#42ec6b" float="right">
          Sepete At
        </Button>
      </Box>
    </Box>
  );
}

export default Card;
