import { useRef, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useBasket } from "../../context/BasketContext";
import { userOrder } from "../../api";

function BasketTotal() {
  const { items, toDefaultBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  const [address, setAddress] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  const handleSubmit = async () => {
    const itemInBasket = items.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemInBasket),
    };

    const res = await userOrder(input);
    console.log(res);
    toDefaultBasket();
    onClose();
  };

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
      <Box mt="3" float="right">
        <Button bg="#42ec6b" w="120px" onClick={onOpen}>
          Bi Tıkla Al
        </Button>
      </Box>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adres bilginizi giriniz!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Adres</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="Adres"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default BasketTotal;
