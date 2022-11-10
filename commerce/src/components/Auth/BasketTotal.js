import React from "react";
import { Box, Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react";
import { useBasket } from "../../context/BasketContext";

function BasketTotal() {
  const { items } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <Box p="20">
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th fontSize="25">Toplam</Th>
              <Th isNumeric fontSize="25">
                {total} ₺
              </Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BasketTotal;
