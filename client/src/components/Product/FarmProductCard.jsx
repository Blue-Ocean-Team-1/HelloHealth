import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import StarRatings from 'react-star-ratings';
import ReactPlayer from 'react-player';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import useStyles from '../Pages/FarmView/FarmAccountStyles';
import NutritionModal from './NutritionModal.jsx';
// import useMainContext from '../../context/MainContext.jsx';
import ProductEdit from '../Pages/FarmView/ProductEdit.jsx';
import useAuth from '../../context/AuthContext.jsx';
import AddToCart from '../Pages/AddToCart.jsx';

const text = {
  paddingTop: '10px',
  paddingBottom: '10px',
};

function FarmProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState(product.product_name);
  const [description, setDescription] = useState(product.product_description);
  const [nutrition, setNutrition] = useState(product.nutritionFacts);
  const productClass = useStyles();
  // const { userType, setUserType } = useMainContext();
  const [userType, setUserType] = useState('customer');
  const { logoutUser, currentUser } = useAuth();
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const renderButton = () => {
    if (userType === 'farmer' && currentUser) {
      return (
        <div style={{ display: 'flex' }}>
          <NutritionModal productId={product.id} nutrition={nutrition} />
          <ProductEdit product={product} />
        </div>
      );
    }
    return (
      <div>
        <div className={productClass.text}>
          <NutritionModal productId={product.id} nutrition={nutrition} />
        </div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Qty: </InputLabel>
          <Select
            value={quantity}
            label="Qty"
            defaultValue={quantity}
            onChange={handleQuantityChange}
          >
            <MenuItem name={'1'} value={'1'}>
              1
            </MenuItem>
            <MenuItem name={'2'} value={'2'}>
              2
            </MenuItem>
            <MenuItem name={'3'} value={'3'}>
              3
            </MenuItem>
          </Select>
        </FormControl>
        {/* <Button startIcon={<AddShoppingCartIcon />}>Add to Cart</Button> */}
        {/* get id and quantity to add to cart here */}
        <AddToCart id={1} quantity={1} />
      </div>
    );
  };

  return (
    <Grid container spacing={0} className={productClass.productItem}>
      <Grid item xs={4}>
        <img
          style={{ objectFit: 'cover', width: '20vw', height: '20vh' }}
          src={product.product_image}
        ></img>
      </Grid>
      <Grid
        container
        item
        xs={8}
        display="flex"
        direction="column"
        justifyContent="space-around"
      >
        <Typography variant="h6">{name}</Typography>
        <Typography style={text}>
          <b>What makes this item fresh?</b>
        </Typography>
        <Typography>{description}</Typography>
        <Grid alignSelf="flex-end">
          <Typography variant="h5">
            <b>${product.product_cost}</b>
          </Typography>
        </Grid>
        <Grid alignSelf="center" style={text}>
          {renderButton()}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FarmProductCard;
