import React from "react";
import BasketTotal from "./BasketTotal";
import { useBasket } from "../../context/BasketContext";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Button,
} from "@chakra-ui/react";

function Basket() {
  const { removeItem, items } = useBasket();

  return (
    <Box p="20">
      <TableContainer >
        <Table variant="striped" size="m">
          <Thead>
            <Tr>
              <Th>Ürün Fotoğraf</Th>
              <Th>Ürün Adı</Th>
              <Th isNumeric>Fiyat</Th>
              <Th>Kaldır</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item) => (
              <Tr key={item._id}>
                <Td >
                  <Image
                    w="70"
                    h="70"
                    src={item.photos[0]}
                    alt={item.title}
                  />
                </Td>
                <Td>{item.title}</Td>
                <Td isNumeric>{item.price} ₺</Td>
                <Td>
                  <Button
                    w="120px"
                    _hover={{ bg: "red.300" }}
                    bg="purple.300"
                    float="right"
                    onClick={() => {
                      removeItem(item._id);
                    }}
                  >
                    Kaldır
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <BasketTotal />
    </Box>
  );
}

export default Basket;
