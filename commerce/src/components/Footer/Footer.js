import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Divider } from "antd";
import {
  InstagramOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <Box
      w="full"
      h="250px"
      p="25px"
      display="flex"
      alignItems="center"
      bgGradient="linear(to-r, red.400, blue.500, gray, blue.500, green.300)"
      mt="50px"
    >
      <Box
        w="50%"
        h="160px"
        p="25px"
        borderRight="5px solid #4B4B4B"
        textAlign="center"
      >
        <Box mb="20px">
          <Text fontSize="40px" fontFamily="'Lobster', cursive;">
            BiTıklaAl
          </Text>
        </Box>
        <Divider />
        <Box>
          <Text>
            2022 yılında <b>Onur Koç</b> tarafından geliştirilmiştir.
          </Text>
        </Box>
      </Box>

      <Box w="50%" h="160px" p="25px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb="10px"
        >
          <InstagramOutlined
            style={{ fontSize: "35px", color: "blue", marginRight: "10px" }}
          />
          <a href="https://www.instagram.com/ourkoc/">@ourkoc</a>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb="10px"
        >
          <GithubOutlined
            style={{ fontSize: "35px", color: "gray", marginRight: "10px" }}
          />
          <a href="https://github.com/Onurkotz">/Onurkotz</a>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb="10px"
        >
          <MailOutlined
            style={{ fontSize: "35px", color: "gray", marginRight: "10px" }}
          />
          <a href="mailto:https://github.com/Onurkotz">ounurkouc@gmail.com</a>
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(Footer);
