import React, { useState } from 'react';
import {
  Button,
  Grid,
  Container,
  Box,
  Typography,
  TableContainer,
  Paper,
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
  const [facts, setFacts] = useState(false);

  const renderFacts = () => {
    if (!facts) {
      return (
        <Button onClick={() => setFacts(true)}>See Nutrition Facts</Button>
      );
    }
    return (
        <div>
          <section className={classes.facts}>
            <header className={classes.factsHeader}>
              <h1 className={classes.factsTitle}>Nutrition Facts</h1>
              <p>Serving Size 1/2 cup (about 82g)</p>
                <p>Serving Per Container 8</p>
            </header>
            <table className={classes.factsTable}>
              <thead>
                <tr>
                  <th colSpan="3" className={classes.smallInfo}>
                    Amount Per Serving
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="names" colSpan="2">
                    <b>Calories</b> 200
                  </td>
                  <td>
                    Calories from Fat 130
                  </td>
                </tr>
                <tr className={classes.thickRow}>
                  <td colSpan="3" className={classes.smallInfo}>
                    <b>% Daily Value*</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <th>
                    Total Fat
                    </th>
                    <td>
                    14g
                    </td>
                  </td>
                  <td>
                    <b>22%</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <th>
                    <b>Saturated Fat</b>
                    </th>
                    <td>
                    9g
                    </td>
                  </td>
                  <td>
                    <b>22%</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <b>Trans Fat</b> 0g
                  </td>
                  <td>
                    <b>0%</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <b>Cholesterol</b> 55mg
                  </td>
                  <td>
                    <b>18%</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                  <b>Sodium</b> 40mg
                  </td>
                    <td>
                      <b>2%</b>
                    </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <b>Carbohydrate</b> 17g
                  </td>
                  <td>
                    <b>6%</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <b>Dietary Fiber</b> 1g
                  </td>
                  <td>
                    <b>4%</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <b>Sugars</b> 14mg
                  </td>
                  <td>
                    <b>6%</b>
                  </td>
                </tr>
                <tr>
                  <td className="names" colSpan="3">
                    <b>Protein</b> 3g
                  </td>
                  <td>
                    <b>5%</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className={classes.factsTableGrid}>
              <tbody>
                <tr>
                  <td colSpan="2">
                    Vitamin A
                    <b> 10%</b>
                  </td>
                  <td>
                    Vitamin C
                    <b> 0%</b>
                  </td>
                </tr>
                <tr className={classes.thinEnd}>
                  <td colSpan="2">
                    Calcium
                    <b> 10%</b>
                  </td>
                  <td>
                    Iron
                    <b> 6%</b>
                  </td>
                </tr>
              </tbody>
            </table>
          <Button onClick={() => setFacts(false)}>Hide Facts</Button>
          </section>
        </div>

    );
  };

  return (
    <>
      <Typography variant="h4">Nutrition</Typography>
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
          {renderFacts()}
        </Grid>
      </Box>
    </>
  );
}
