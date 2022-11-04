import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Box bg="aqua" borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#">
        <Box d="flex" textAlign="center">
          <Box fontSize="22" fontWeight="bold" mb="3" letterSpacing="wide" as='h4'>
            Apple Macbook Air M2
          </Box>
          <Box maxW="100%">
            <Image m="auto" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665" alt="asd" />
          </Box>
        </Box>

        <Box mt="3" textAlign="center">
          <Box fontSize="20" fontWeight="semibold">24.990 TL</Box>
          
        </Box>
      </Link>
      <Box mt="3" display="flex" alignItems="center" justifyContent="space-around">
      <Box float="left">Tarih</Box>
        <Button bg="#42ec6b" float="right">
        Sepete At
      </Button>
      </Box>
      
    </Box>
  );
}

export default Card;
