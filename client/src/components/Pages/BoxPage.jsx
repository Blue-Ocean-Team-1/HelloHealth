import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MealList from '../Product/MealList.jsx';
import Nutrition from '../Product/Nutrition.jsx';
import useStyles from '../Product/nutritionStyles';

export default function BoxPage() {
  const [boxList, setBoxList] = useState([
    {
      name: 'carrots',
      quantity: 5,
      description: 'Beautiful california carrots',
    },
    {
      name: 'peppers',
      quantity: 5,
      description: 'Grown in the heart of Silicon Valley',
    },
    {
      name: 'tomatoes',
      quantity: 5,
      description: 'Vine ripen tomatoes fresh from the garden',
    },
    {
      name: 'onions',
      quantity: 1,
      description: 'The sweetest onions in America.',
    },
    {
      name: 'steak',
      quantity: 5,
      description: 'Happy Cows equals delicious meat!',
    },
  ]);
  const [boxOptions, setBoxOptions] = useState([]);

  const classes = useStyles();

  const getBoxes = () => {
    const config = {
      method: 'get',
      url: 'http://localhost:8001/boxes/getBoxes',
      headers: {},
    };

    axios(config)
      .then((response) => {
        setBoxOptions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBoxes();
  }, []);

  function renderRow(props) {
    const { index, style } = props;

    /**
      {
        "id": 9999,
        "product_name": "small-box",
        "product_description": "Offering a box of the finest beef in California.",
        "product_cost": "$59.99",
        "product_inventory": 99,
        "product_image": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114310/new-york-strip-and-filet-mignon-prime-steak-gift-box.98e97fd3bcbdb666e0e14e2ff7978b6f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1&w=1946",
        "product_rating": "5",
        "farm_id": "5",
        "reviews_count": 100
    },
     */
    return (
      <>
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemButton divider={true}>
            <ListItemText
              primary={`${boxList[index].name}`}
              secondary={`${boxList[index].description}`}
            />
            <ListItemText
              primary={`Quantity: ${boxList[index].quantity}`}
              align="end"
            />
          </ListItemButton>
        </ListItem>
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '80%',
          bgcolor: 'background.paper',
          border: '1px solid #D3D3D3',
          margin: 'auto',
          marginTop: '1em',
          boxSizing: 'border-box',
          boxShadow: 3,
        }}
      >
        <h1 style={{ paddingLeft: '0.65em' }}>This Week's Box</h1>
        <p style={{ paddingLeft: '1em' }}>
          {boxOptions.length > 0 && boxOptions[0].product_description}
        </p>
        <List
          sx={{
            width: '100%',
            maxWidth: 5000,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          <li>
            <ul>
              {boxList.map((item, index) => (
                <ListItem key={index} component="div" disablePadding>
                  <ListItemButton divider={true}>
                    <ListItemText
                      primary={`${boxList[index].name}`}
                      secondary={`${boxList[index].description}`}
                    />
                    <ListItemText
                      primary={`Quantity: ${boxList[index].quantity}`}
                      align="end"
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </ul>
          </li>
        </List>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '80%',
          bgcolor: 'background.paper',
          margin: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <h1>Select a plan:</h1>
        <MealList />
        <Grid container>
          <Grid item xs={12} align="center" paddingTop="1rem">
            <Button
              className={classes.addToCart}
              startIcon={<AddShoppingCartIcon />}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
