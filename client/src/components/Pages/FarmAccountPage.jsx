import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarRatings from 'react-star-ratings';
import ReactPlayer from 'react-player';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

const farmInfo = {
  id: 11,
  user_id: 'mdegnen0',
  email: 'mdegnen0@admin.ch',
  name: 'Marcus Degnen',
  description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  profile_image: 'http://dummyimage.com/1600x500.png/cc0000/ffffff',
  farm_rating: 4,
  video_link: 'https://www.youtube.com/watch?v=0q0TXV8PyNY&ab_channel=ExploreFarmLife',
  products: [{
    id: 1,
    product_name: 'Shrimp - 16/20, Iqf, Shell On',
    product_description: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    product_cost: 24,
    product_inventory: 9,
    product_image: 'http://dummyimage.com/800x800.png/5fa2dd/ffffff',
    product_rating: 2,
    farm_id: 11,
  }, {
    id: 4,
    product_name: 'Lid - Translucent, 3.5 And 6 Oz',
    product_description: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    product_cost: 23.81,
    product_inventory: 4,
    product_image: 'http://dummyimage.com/230x100.png/5fa2dd/ffffff',
    product_rating: 4,
    farm_id: 11,
  }],
};

const container = {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
};

const centered = {
  position: 'absolute',
  fontSize: '10vw',
  color: 'black',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const text = {
  padding: '10px',
};

export default function FarmAccountPage() {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <h1>Farm Account Page</h1>
      <Grid>
        <Grid item xs={12} style={container}>
          <img style={{maxWidth: '90vw', filter: 'grayscale(100%)', opacity: '10%'}} src={farmInfo.profile_image} />
          <div style={centered}>{farmInfo.name}</div>
        </Grid>
        <Grid style={text}>
          Rating:
          <StarRatings
            rating={farmInfo.farm_rating}
            starRatedColor={'#5065A8'}
            numberOfStars={5}
            />
        </Grid>
        <Grid style={text}>
          <div>
            <Typography>
                <b>About</b> {farmInfo.name}
            </Typography>
          </div>
          <div style={text}>
            <Typography>
                {farmInfo.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid display="flex" justifyContent="center">
        <ReactPlayer url={farmInfo.video_link} />
      </Grid>
        <Typography style={text} variant="h4">Browse Products</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img style={{maxWidth: '30vw'}} src={farmInfo.products[0].product_image}></img>
          </Grid>
          <Grid container item xs={8} display="flex" direction="column">
            <Typography variant="h6">
            {farmInfo.products[0].product_name}
            </Typography>
            <Typography>
            {farmInfo.products[0].product_description}
            </Typography>
            <IconButton color="primary" aria-label="add to shopping cart">
              <Grid item xs={12} align="flex-end">
              <AddShoppingCartIcon />
              </Grid>
            </IconButton>
          </Grid>
        </Grid>
    </>
  );
}
