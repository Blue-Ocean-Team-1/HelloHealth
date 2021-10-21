import React, { useState, useEffect } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useMainContext from '../../context/MainContext.jsx';
import {
  ACCOUNT,
  HOME,
  BOX,
  FARMS,
  CART,
  CHECKOUT,
} from '../../config/pageRoutes';
import ShippingPage from './ShippingPage/ShippingPage.jsx';

export default function CartPage() {
  const [click, setClick] = useState(true);
  const { setPage } = useMainContext();
  const [dummyDatas, setDummyDatas] = useState([
    {
      productId: 0,
      productImage: '',
      productName: '',
      productQuantity: 0,
      productPrice: '',
    },
  ]);

  const dataParsing = (data, cart) => {
    const temp = [];
    for (let i = 0; i < data.length; i += 1) {
      const item = {};
      item.productId = data[i].id;
      item.productImage = data[i].product_image;
      item.productName = data[i].product_name;
      item.productPrice = data[i].product_cost;
      // item.productQuantity = cart[data[i].id].productQuantity;
      item.productQuantity = 3;
      temp.push(item);
    }
    console.log(temp);
    setDummyDatas(temp);
  };

  const getProduct = (cart) => {
    const data = Object.keys(cart);
    axios
      .get('http://localhost:8001/product/CartInfo')
      .then((res) => {
        console.log('data pull from database');
        dataParsing(res.data, cart);
      })
      .catch((err) => {
        console.error(`error when try to pull data ${err}`);
      });
  };

  const handlePageChange = (e) => {
    setPage(e.target.name);
  };

  useEffect(() => {
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));

    getProduct(cart);
  }, [click]);

  const removeItem = (id) => {
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));
    delete cart[id];
    window.sessionStorage.setItem('cart', temp);
    setClick(!click);
  };

  const renderSummary = () => {
    let totalPrice = 0;
    let itemCount = 0;
    for (let i = 0; i < dummyDatas.length; i += 1) {
      totalPrice +=
        dummyDatas[i].productQuantity *
        Number(dummyDatas[i].productPrice.substring(1));

      itemCount += dummyDatas[i].productQuantity;
    }
    return (
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs>
          <p>{`${itemCount} items`}</p>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs>
          <p>{`Total: $${totalPrice}`}</p>
        </Grid>
      </Grid>
    );
  };

  const renderItems = () =>
    dummyDatas.map((data, index) => (
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        key={index}
      >
        <Grid item xs>
          <img
            style={{ maxWidth: 150, maxHeight: 150 }}
            src={data.productImage}
          ></img>
        </Grid>
        <Grid item xs>
          <Stack>
            <p>{data.productName}</p>
            <p>{`Quantity x${data.productQuantity}`}</p>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack>
            <p>{data.productPrice}</p>

            <Button
              variant="outlined"
              value={data.id}
              onClick={(e) => removeItem(Number(e.target.value))}
            >
              Remove
            </Button>
          </Stack>
        </Grid>
      </Grid>
    ));

  return (
    <>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <p>Cart page</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs>
            <p>Cart</p>
          </Grid>
        </Grid>
        {renderSummary()}
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <Link to={HOME}>
              <Button variant="outlined" onClick={handlePageChange} name="home">
                Browse Products
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs>
            <Link to={BOX}>
              <Button variant="outlined" onClick={handlePageChange} name="box">
                More Boxes
              </Button>
            </Link>
          </Grid>
        </Grid>
        {renderItems()}
        <Link to={CHECKOUT}>
          <button name="checkout" onClick={handlePageChange}>
            GO TO CHECKOUT
          </button>
        </Link>
      </Stack>
    </>
  );
}

/*

real dummy data
{
  id: 123,
  product_image:
    'https://i.kym-cdn.com/photos/images/newsfeed/001/879/958/fb1.gif',
  product_name: 'JamCat',
  product_cost: '$14.99',
  product_inventory: 345,
  product_rating: 4,
  product_desription: 'this is a description',
  farm_id: 1,
  reviews_count: 20,
},

*/
