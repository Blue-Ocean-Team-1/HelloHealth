import React from 'react';
import {
  Button,
  Grid,
  Container,
  Box,
  Typography,
} from '@mui/material';
import useStyles from './nutritionStyles';

const data = {
  id: 1,
  productId: 392,
  productType: 'Produce',
  nutritionFacts: {
    calories: 255,
    protein: 105,
    fat: 179,
    fiber: 278,
    carbs: 217,
  },
};

export default function Nutrition() {
  const classes = useStyles();

  return (
    <>
      <h1>Nutrition</h1>
      <Box>
        <Grid
        container
        spacing={2}

        >
          <Grid item xs={6} className={`${classes.nutritionBottom} ${classes.nutritionRight}`}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Calories: {data.nutritionFacts.calories}g
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.nutritionBottom}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Carbs: {data.nutritionFacts.carbs}g
            </Typography>
          </Grid>
          <Grid item xs={6} className={`${classes.nutritionBottom} ${classes.nutritionRight}`} >
            <Typography variant="h6" sx={{ flexGrow: 1 }} >
              Total fat: {data.nutritionFacts.fat}g
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.nutritionBottom}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Protein:  {data.nutritionFacts.protein}g
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
        >
            <Button>See Nutrition Facts</Button>
        </Grid>
      </Box>
    </>
  );
}


