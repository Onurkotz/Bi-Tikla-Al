import React from "react";
import AdminNavigation from "./AdminNavigation";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { product, updateProduct } from "../../api";
import Loading from "../Loading/Loading";
import { Formik, Form, FieldArray } from "formik";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Textarea,
} from "@chakra-ui/react";
import { Divider } from "antd";

function AdminEditProduct() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["product", id], () =>
    product(id)
  );

  const handleSubmit = async (values, bag) => {
    try {
      await updateProduct(values, id);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return "Error.";
  console.log(data);

  console.log(data);
  return (
    <Box>
      <AdminNavigation />

      <Flex align="center" justifyContent="center">
        <Box pt="10" w="50%">
          <Divider style={{ fontSize: "40px", borderColor: "black" }}>
            Düzenle
          </Divider>
          {/* <Box my={5}>
            {formik.errors.general && (
              <Alert status="error">{formik.errors.general}</Alert>
            )}
          </Box> */}
          <Box align="center">
            <Formik
              initialValues={{
                title: data.title,
                description: data.description,
                price: data.price,
                photos: data.photos,
              }}
              onSubmit={handleSubmit}
            >
              {({
                values,
                handleSubmit,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
              }) => (
                <>
                  <Form>
                    <FormControl>
                      <FormLabel>Ürün Adı</FormLabel>
                      <Input
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        isInvalid={touched.title && errors.title}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormControl mt="5">
                      <FormLabel>Ürün Detayı</FormLabel>
                      <Textarea
                        name="description"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        isInvalid={touched.description && errors.description} //Bu satır hata alındığında formik'in onu yakalayıp kullanıcıyı uyarması için.
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormControl mt="5">
                      <FormLabel>Fiyat</FormLabel>
                      <Input
                        name="price"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        isInvalid={touched.price && errors.price}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormControl mt="5">
                      <FormLabel>Fotoğraf URL</FormLabel>
                      <FieldArray
                        name="photos"
                        render={(arrayHelpers) => (
                          <div>
                            {values.photos &&
                              values.photos.map((photo, index) => (
                                <div key={index}>
                                  <Input
                                    name={`photo.${index}`}
                                    value={photo}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    mt="2"
                                  />

                                  <Button
                                    bg="#42ec6b"
                                    mt="2"
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    -
                                  </Button>
                                </div>
                              ))}
                            <Button
                              mt="5"
                              bg="#42ec6b"
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Ürün Fotoğrafı Ekle
                            </Button>
                          </div>
                        )}
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
                      Kaydet
                    </Button>
                  </Form>
                </>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default AdminEditProduct;
