import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import MealList from '../Product/MealList.jsx';
import Nutrition from '../Product/Nutrition.jsx';
import useStyles from '../Product/nutritionStyles';

export default function BoxPage() {
  const [boxList, setBoxList] = useState([{ name: 'carrots', quantity: 5, description: 'lorum in ' }, { name: 'peppers', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'tomatoes', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'onions', quantity: 1, description: 'lorum ipsom somethin ' }, { name: 'steak', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'carrots', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'peppers', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'tomatoes', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'onions', quantity: 1, description: 'lorum ipsom somethin ' }, { name: 'steak', quantity: 5, description: 'lorum ipsom somethin ' }]);
  const classes = useStyles();

  function renderRow(props) {
    const { index, style } = props;

    return (
      <>
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemButton divider={true} >
                <ListItemText primary={`${boxList[index].name}`} secondary={`${boxList[index].description}`} />
                <ListItemText primary={`Quantity: ${boxList[index].quantity}`} align='end'/>
          </ListItemButton>
        </ListItem>
      </>
    );
  }

  return (
    <>
    <Box sx={{ boxShadow: 0 }}>
      <Box style={boxShadow: '0px -1.95px 1.5px rgba(0, 0, 255, .2), 1.95px 0px 1.5px rgba(0, 0, 255, .2), -1.95px 0px 1.5px rgba(0, 0, 255, .2);'}
        sx={{
          width: '100%', height: '100%', maxWidth: '80%', bgcolor: 'background.paper', border: '1px solid #D3D3D3', margin: 'auto', marginTop: '1em', paddingLeft: '1em', boxSizing: 'border-box', boxShadow: 1,
        }}
      >
        <h1>Box Name:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={200}
              width={width}
              itemSize={70}
              itemCount={boxList.length}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
        </Box>
        <Box
          sx={{
            width: '100%', height: '200px', maxWidth: '80%', bgcolor: 'background.paper', border: '1px solid #D3D3D3', margin: 'auto', boxSizing: 'border-box', boxShadow: 1,
          }}>
      </Box>
     </Box>

        <Box
          sx={{
            width: '100%', height: '100%', maxWidth: '80%', bgcolor: 'background.paper', margin: 'auto', boxSizing: 'border-box',
          }}>
        <h1>Select a plan:</h1>
        <MealList/>
        <Grid container>
          <Grid item xs={12} align='center' paddingTop='1rem'>
        <Button className={classes.addToCart} startIcon={<AddShoppingCartIcon />}>
          Add to Cart
        </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
