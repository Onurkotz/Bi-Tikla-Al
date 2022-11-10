import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Divider,
  Button,
  Alert
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { userLogin } from "../../api";
import validationSchema from "./validationsLogin";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const responseLogin = await userLogin({
          email: values.email,
          password: values.password,
        });
        console.log(responseLogin);
        login(responseLogin);
        navigate("../auth/profile");
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
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
           <Box my={5}>
						{formik.errors.general && (
							<Alert status="error">{formik.errors.general}</Alert>
						)}
					</Box>
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
                _focus={{ bg: "red" }}
              >
                Giriş
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
  