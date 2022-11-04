import React from 'react';
import {Grid} from "@chakra-ui/react"
import Card from "./Card";

function Products() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p={10}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

    </Grid>
  )
}

export default Products