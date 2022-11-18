import React from "react";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { userLogin } from "../../api";
import validationSchema from "./validationsLogin";
import { useAuth } from "../../context/AuthContext";
import { Divider } from "antd";

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
        responseLogin.user.role === "user"
          ? navigate("../auth/profile")
          : navigate("../admin");
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
    },
  });

  return (
    <Box>
      <Navigation />

      <Flex align="center" justifyContent="center">
        <Box pt="10" w="50%">
          <Divider style={{ fontSize: "40px", borderColor: "black" }}>
            Giriş Yap
          </Divider>
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
    </Box>
  );
}

export default Login;
