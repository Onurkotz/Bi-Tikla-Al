import React from "react";
import { Box, Grid, Button, Flex } from "@chakra-ui/react";
import Navigation from "../Navigation/Navigation";
import Card from "./Card";
import Loading from "../Loading/Loading";
import { useInfiniteQuery } from "react-query";
import { getAllProducts } from "../../api";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", getAllProducts, {
    getNextPageParam: (lastPage, pages) => {
      const morePage = lastPage?.length === 6;
      if (!morePage) {
        return;
      }
      return pages.length + 1;
    },
  });
  if (status === "loading") return <Loading />;
  if (status === "error") return error;

  return (
    <Box>
      <Navigation />

      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={10}>
        {/* {data.map((item, key) => (
        <Card key={key} item={item} />
      ))} */}
        {
          // pages adı altında geleceğü için önce sayfaları sonra da ürünleri mapledim.
          data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((item) => (
                <Card key={item._id} item={item} />
              ))}
            </React.Fragment>
          ))
        }
      </Grid>

      <Flex mt="10" mb="20" justifyContent="center">
        <Button
          w="120px"
          bg="#42ec6b"
          _hover={{ bg: "red.300" }}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          isLoading={isFetchingNextPage} // Yükleme çemberinin görünmesi için Chakra butonunda geliyor.
          _focus={{ bg: "red" }}
        >
          {isFetchingNextPage
            ? "Yükleniyor"
            : hasNextPage
            ? "Sonraki Sayfa"
            : "Gösterecek ürün kalmadı."}
        </Button>
      </Flex>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </Box>
  );
}

export default Products;
