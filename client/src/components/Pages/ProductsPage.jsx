import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import producsListDummyData from './productsHelpers/productsSampleData.json';
import ProductView from './productsHelpers/ProductView.jsx';

export default function ProductsPage() {
  const style = { ul: { justifyContent: 'center' } };
  const pageCount = Math.floor(producsListDummyData.length / 20);
  const [currentProductsList, setCurrentProductsList] = useState(producsListDummyData.slice(0, 20));
  let productStart; let productEnd;
  const handlePageChange = (pageSelected) => {
    productStart = (pageSelected - 1) * 20;
    productEnd = productStart + 20;
    setCurrentProductsList(producsListDummyData.slice(productStart, productEnd));
  };

  const renderProductList = (productList) => (
    productList.map((product) => (
      <ProductView product={product} />
    )));
  return (
    <Container maxWidth="xl">
      <h1>Products Page</h1>
      <Grid container spacing={2}>
        <Grid container item justifyContent="space-between" spacing={2}>
          {renderProductList(currentProductsList)}
        </Grid>
      </Grid>
      <Box my={5} sx={style}>
        <Pagination
          count={pageCount}
          variant="outlined" color="primary" size="large"
          showFirstButton showLastButton
          onChange={(e) => handlePageChange(e.target.innerText)}
        />
      </Box>
    </Container>
  );
}
