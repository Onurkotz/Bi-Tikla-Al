import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Image } from "@chakra-ui/react";

import "../../App.css";

function Navigation() {
  return (
    <div className="nav">
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
          borderRadius="full"
          boxSize="150px"
          src="./logo.png"
          alt="Logo"
        />
      </div>
      <div className="nav-right">
        <Stack direction="row" spacing={2} align="center">
          <Link to="/login">
            <Button colorScheme="blue" variant="solid">
              Giriş
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="red" variant="solid">
              Kaydol
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
}

export default Navigation;
