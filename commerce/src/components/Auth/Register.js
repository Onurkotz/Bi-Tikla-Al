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
import validationSchema from "./validations";
import { userRegister } from "../../api";
import { useAuth } from "../../context/AuthContext";
import { Divider } from "antd";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const responseRegister = await userRegister({
          email: values.email,
          password: values.password,
        });
        console.log(responseRegister);
        login(responseRegister);
        responseRegister.user.role === "user"
          ? navigate("../auth/profile")
          : navigate("../admin");
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
    },
  });

  return (
    <div>
      <Navigation />

      <Flex align="center" justifyContent="center">
        <Box pt="10" w="50%">
          <Divider style={{ fontSize: "40px", borderColor: "black" }}>
            Kaydol
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
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl mt="5">
                <FormLabel>??ifre</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password} //Bu sat??r hata al??nd??????nda formik'in onu yakalay??p kullan??c??y?? uyarmas?? i??in.
                />
              </FormControl>
              <FormControl mt="5">
                <FormLabel>??ifre Tekrar</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  isInvalid={
                    formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm
                  }
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
                Kaydol
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Register;
