import React from "react";
import companyLogo from "../../../companyLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { Box, Image, Button, Stack } from "@chakra-ui/react";
import { useAuth } from "../../../context/AuthContext";


function AdminNavigation() {
  const { loggedIn, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    logout(() => {
      navigate("../");
    });
  };

  return (
    <Box
    bgGradient="linear(to-r, red.400, blue.500, green.300)"
      mt="15px"
      w="full"
      h="200px"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box>
      <Image
          objectFit="cover"

          boxSize="200px"
          src={companyLogo}
          alt="Logo"
        />
      </Box>
      <Box display="flex" fontSize="20px">
        <Box mr="5">
          <Link to="/admin">Anasayfa</Link>
        </Box>
        <Box mr="5">
          <Link to="/admin/products">Ürünler</Link>
        </Box>
        <Box mr="5">
          <Link to="/admin/new">Yeni Ürün Ekle</Link>
        </Box>
      </Box>
      <Box>
        {loggedIn && (
          <>
            <Stack>
              <Button
                colorScheme="red"
                _hover={{ bg: "red.300" }}
                _focus={{ bg: "red" }}
                onClick={handleLogout}
              >
                Çıkış
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
}

export default AdminNavigation;
