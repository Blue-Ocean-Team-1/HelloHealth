import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function ProductView({ product }) {
  const productName = product.product_name;
  const productDescription = product.product_description;
  const productCost = product.product_cost;
  const productImage = product.product_image;
  const productInventory = product.product_inventory;
  const productRating = product.product_rating;

  return (
    <Grid item spacing={5}>
      <Card sx={{ width: 250 }}>
        <CardMedia
          component="img"
          height="140"
          image={productImage}
          alt={productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
