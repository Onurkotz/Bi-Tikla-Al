import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Image, Box } from "@chakra-ui/react";
import companyLogo from "../../companyLogo.png";
import { useAuth } from "../../context/AuthContext";

import "../../App.css";

function Navigation() {
  const { loggedIn } = useAuth();
  console.log(loggedIn);

  return (
    <Box
      className="nav"
      bgGradient="linear(to-r, red.400, blue.500, green.300)"
    >
      <div className="nav-left">
        <nav>
          <ul>
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/products">Ürünlerimiz</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-center">
        <Image
          objectFit="cover"
          mr="10"
          boxSize="400px"
          src={companyLogo}
          alt="Logo"
        />
      </div>
      <div className="nav-right">
        {!loggedIn && (
          <>
            <Stack direction="row" spacing={2} align="center">
              <Link to="/auth/login">
                <Button
                  colorScheme="blue"
                  _hover={{ bg: "red.300" }}
                  _focus={{ bg: "red" }}
                >
                  Giriş
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button
                  colorScheme="red"
                  _hover={{ bg: "red.300" }}
                  _focus={{ bg: "red" }}
                >
                  Kaydol
                </Button>
              </Link>
            </Stack>
          </>
        )}
        {loggedIn && (
          <>
            <Stack direction="row" spacing={2} align="center">
              <Link to="/auth/profile">
                <Button
                  bg="#42ec6b"
                  _hover={{ bg: "red.300" }}
                  _focus={{ bg: "red" }}
                >
                  Profile
                </Button>
              </Link>
            </Stack>
          </>
        )}
      </div>
    </Box>
  );
}

export default Navigation;
