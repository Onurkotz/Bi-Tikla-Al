import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";

import "../../App.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav-left">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-center">Bi Tıkla Al</div>
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
