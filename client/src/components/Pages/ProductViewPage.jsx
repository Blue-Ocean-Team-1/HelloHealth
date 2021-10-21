import React, { useState, useContext } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import StarRatings from 'react-star-ratings';
import useMainContext from '../../context/MainContext.jsx';
import Nutrition from '../Product/Nutrition.jsx';
import MealList from '../Product/MealList.jsx';

export default function ProductViewPage() {
  const [showMessage, setShowMessage] = useState(false);
  const { currentProduct } = useMainContext();
  const { id } = currentProduct;
  const productName = currentProduct.product_name;
  const productDescription = currentProduct.product_description;
  const productCost = currentProduct.product_cost;
  const productImage = currentProduct.product_image;
  const productInventory = currentProduct.product_inventory;
  const reviewsCount = currentProduct.reviews_count;
  const [productRating, setProductRating] = useState(
    JSON.parse(currentProduct.product_rating)
  );

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = (rating) => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    const params = {
      id,
      product_rating: productRating,
      reviews_count: reviewsCount,
      custRating: rating,
    };
    axios
      .post('http://localhost:8001/product/productRating', params)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const renderDropdown = () =>
    [...Array(productInventory + 1).keys()].map((i) => (
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    ));
  return (
    <Container size="md" sx={{ my: 3 }}>
      <Grid container spacing={2} sx={{ my: 3 }}>
        <Grid item sm={6}>
          <img width="100%" src={productImage} />
        </Grid>
        <Grid container item md={6}>
          <StarRatings
            rating={productRating || 0}
            starRatedColor="yellow"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="2px"
            name="rating"
            changeRating={handleClick}
            starHoverColor="red"
          />
          <Box sx={{ display: showMessage ? 'block' : 'none', ml: 3 }}>
            <span>Thanks for your review.</span>
          </Box>
          <Grid item xs={12}>
            <h1>{productName}</h1>
          </Grid>
          <Grid item xs={12}>
            <h2>{productCost}</h2>
          </Grid>
          <Grid item xs={12}>
            <p>{productDescription}</p>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item sm={6}>
              <FormControl fullWidth>
                <InputLabel id="selectQuantity-label">Quantity</InputLabel>
                <Select
                  labelId="selectQuantity-label"
                  id="selectQuantity"
                  value={1}
                  label="Quantity"
                  // onChange={handleChange}
                >
                  {renderDropdown()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} sx={{ display: 'flex' }}>
              <Button
                fullWidth
                variant="outlined"
                color="success"
                sx={{ mb: isSmallScreen ? '0px' : '11px' }}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <MealList />
      <Nutrition />
    </Container>
  );
}
