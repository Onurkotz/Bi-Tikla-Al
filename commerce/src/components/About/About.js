import React from "react";
import Navigation from "../Navigation/Navigation";
import { Box, Grid, GridItem, Text, Heading, Stack } from "@chakra-ui/react";
import { Divider } from "antd";

function About() {
  return (
    <Box>
      <Navigation />

      <Grid templateColumns="repeat(5, 1fr)" gap={6} p={10}>
        <GridItem colSpan={3} bg="aqua" p={10}>
          <Box mb={3}>
            <Heading fontSize="4xl">BiTıklaAl E-Ticaret Web Uygulaması</Heading>
          </Box>
          <Divider />
          <Box d="block">
            <Stack spacing={3}>
              <Text
                fontSize="2xl"
                style={{ textIndent: 30, wordBreak: "break-all" }}
              >
                Bu uygulama geliştirilirken Frontend tarafında React.js, Backend
                tarafında ise Node.js kullanılmıştır.
              </Text>
              <Text
                fontSize="2xl"
                style={{ textIndent: 30, wordBreak: "break-all" }}
              >
                Frontend tarafında bileşen kütüphaneleri olarak Chakra-UI ve Ant
                Design kullanıldı. Form bileşenleri Formik ile yazıldı ve
                validasyon işlemleri Yup ile oluşturuldu. Yönlendirmelerde
                React-Router-Dom v6 kullanıldı. Veri tabanından veriler Axios
                ile getirildi. İstekler için ise Tanstack/React-Query
                kullanıldı.
              </Text>
              <Text
                fontSize="2xl"
                style={{ textIndent: 30, wordBreak: "break-all" }}
              >
                Backend geliştirilirken Express.js framework'u kullanılmıştır.
                Veritabanı olarak Mongo DB kullanıldı. Mongoose kütüphanesi ile
                veri modelleri yazıldı. Bellek içi veriler için Redis'ten
                faydalanıldı. Tokenlar oluşturmak için JWT'den yararlanıldı.
                Validasyon işlemleri için ise Joi kullanıldı. Fırlatılan
                hataları yakalamak için Boom kütüphanesi kuruldu. Bcrypt
                kütüphanesi şifreleri kripte ederken kullanıldı.{" "}
              </Text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem colSpan={2} bg="aqua" p={10}>
          <Box mb={3}>
            <Heading fontSize="4xl">İletişim Bilgileri</Heading>
          </Box>
          <Divider />
          <Box d="block">
            <Stack spacing={3}>
              <Text fontSize="2xl">Telefon: +90 5432985139</Text>
              <Text fontSize="2xl">E-Posta: ounurkouc@gmail.com</Text>
              <Text fontSize="2xl">Instagram: @ourkoc</Text>
              <Text fontSize="2xl">Github: /Onurkotz</Text>
              <Text fontSize="2xl">İstanbul/Türkiye</Text>
              <Divider />
              <Text fontSize="sm">
                2022 yılında <b>Onur Koç</b> tarafından geliştirilmiştir.
              </Text>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default React.memo(About);
