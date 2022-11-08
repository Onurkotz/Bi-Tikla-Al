import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Image, Box } from "@chakra-ui/react";
import companyLogo from "../../companyLogo.png";

import "../../App.css";

function Navigation() {
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
        <Stack direction="row" spacing={2} align="center">
          <Link to="/auth/login">
            <Button colorScheme="blue" _hover={{ bg: "red.300" }}>
              Giriş
            </Button>
          </Link>
          <Link to="/auth/register">
            <Button colorScheme="red" _hover={{ bg: "red.300" }}>
              Kaydol
            </Button>
          </Link>
        </Stack>
      </div>
    </Box>
  );
}

export default Navigation;
