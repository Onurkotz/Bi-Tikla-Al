import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
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
  Text,
} from "@chakra-ui/react";

function Basket() {
  const { removeItem, items } = useBasket();

  return (
    <Box>
      <Navigation />

      <Box p="20">
        {items.length === 0 && (
          <Text fontSize="30px" fontWeight="semibold" textAlign="center">
            Sepetiniz boş.
          </Text>
        )}
        {items.length > 0 && (
          <>
            <TableContainer>
              <Table variant="striped" size="m">
                <Thead>
                  <Tr>
                    <Th>Ürün Fotoğraf</Th>
                    <Th>Ürün Adı</Th>
                    <Th isNumeric>Fiyat</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.map((item) => (
                    <Tr key={item._id}>
                      <Td>
                        <Image
                          w="70"
                          h="70"
                          src={item.photos[0]}
                          alt={item.title}
                        />
                      </Td>
                      <Td fontSize="20px" fontWeight="semibold">
                        <Link to={`/products/${item._id}`}>{item.title}</Link>
                      </Td>
                      <Td fontSize="20px" fontWeight="semibold" isNumeric>
                        {item.price} ₺
                      </Td>
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
          </>
        )}
      </Box>
    </Box>
  );
}

export default Basket;
