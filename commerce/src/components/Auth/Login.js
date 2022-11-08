import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Flex align="center" justifyContent="center">
        <Box pt="10" w="50%">
          <Box align="center">
            <Heading>Giriş Yap</Heading>
          </Box>
          <Divider mt="5" mb="5" />
          <Box align="center">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-Posta</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl mt="5">
                <FormLabel>Şifre</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </FormControl>

              <Button
                bg="#42ec6b"
                _hover={{ bg: "red.300" }}
                w="full"
                mt="5"
                type="submit"
              >
                Giriş Yap
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
