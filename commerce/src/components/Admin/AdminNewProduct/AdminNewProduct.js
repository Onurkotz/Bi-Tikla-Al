import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import { Formik, Form, FieldArray } from "formik";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Divider } from "antd";
import { createProduct } from "../../../api";

function AdminNewProduct() {
  const queryClient = useQueryClient();
  const toast = useToast();

  const createMutation = useMutation(createProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const handleSubmit = async (values, bag) => {
    console.log(values);

    const newValues = {
      ...values,
      photos: JSON.stringify(values.photos),
    };

    createMutation.mutate(newValues, {
      onSuccess: () => {
        toast({
          title: "Ürün eklendi!",
          description: `${newValues.title} başarıyla eklendi.`,
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: {
            fontSize: "20px",
          },
        });
      },
    });

    values.title = "";
    values.description = "";
    values.price = "";
    values.photos = [];
  };

  return (
    <Box>
      <AdminNavigation />

      <Flex align="center" justifyContent="center">
        <Box pt="10" w="50%">
          <Divider style={{ fontSize: "40px", borderColor: "black" }}>
            Yeni Ürün Ekle
          </Divider>

          <Box align="center">
            <Formik
              initialValues={{
                title: "",
                description: "",
                price: "",
                photos: [],
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
                      />
                    </FormControl>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photos, index) => (
                              <div key={index}>
                                <FormControl mt="5">
                                  <FormLabel>Fotoğraf URL</FormLabel>
                                  <Input
                                    name={`photos.${index}`}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                  />
                                </FormControl>
                                <Button
                                  bg="#42ec6b"
                                  mt="5"
                                  mr="5"
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

export default AdminNewProduct;
