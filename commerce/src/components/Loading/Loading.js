import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="green.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
}

export default Loading;
