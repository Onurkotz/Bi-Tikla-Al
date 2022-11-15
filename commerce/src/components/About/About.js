import React from "react";
import Navigation from "../Navigation/Navigation";
import {Box} from "@chakra-ui/react"

function About() {
  return (
    <Box>
      <Navigation />
      Bi Tıkla Gelsin E-Ticaret Markası
    </Box>
  );
}

export default React.memo(About);
