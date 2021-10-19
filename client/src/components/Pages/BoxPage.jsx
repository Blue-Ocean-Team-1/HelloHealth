import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import MealList from '../Product/MealList.jsx';

// function renderRow(props) {
//   const { index, style } = props;
//   console.log(props.boxList);

//   return (
//     <>
//     <ListItem style={style} key={index} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`${props.boxList[0].name}`} />
//       </ListItemButton>
//     </ListItem>
//       </>
//   );
// }

export default function VirtualizedList() {
  const [boxList, setBoxList] = useState([{ name: 'carrots', quantity: 5, description: 'lorum in ' }, { name: 'peppers', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'tomatoes', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'onions', quantity: 1, description: 'lorum ipsom somethin ' }, { name: 'steak', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'carrots', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'peppers', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'tomatoes', quantity: 5, description: 'lorum ipsom somethin ' }, { name: 'onions', quantity: 1, description: 'lorum ipsom somethin ' }, { name: 'steak', quantity: 5, description: 'lorum ipsom somethin ' }]);

  function renderRow(props) {
    const { index, style } = props;
    // console.log(boxList);

    return (
      <>
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemButton divider={true} >
            {/* <Grid container rowSpacing={0} spacing={0} >
              <Grid item xs={6} sm={4} md={6} key={index} align='start' > */}
                <ListItemText primary={`${boxList[index].name}`} secondary={`${boxList[index].description}`} />
              {/* </Grid> */}
              {/* <Grid item xs={6} sm={4} md={6} key={index} align='end'> */}
                <ListItemText primary={`Quantity: ${boxList[index].quantity}`} align='end'/>
              {/* </Grid>
            </Grid> */}
          </ListItemButton>
        </ListItem>
      </>
    );
  }

  return (
    <>
    {/* <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"> */}
        {/* <Grid item> */}
      <Box
        sx={{
          width: '100%', height: '100%', maxWidth: '80%', bgcolor: 'background.paper', border: '1px solid #D3D3D3', margin: 'auto', marginTop: '1em', paddingLeft: '1em', boxSizing: 'border-box',
        }}
      >
        <h1>Box Name:</h1>
        <p>stuff about the box</p>
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
        {/* </Grid>
        <Grid item> */}
        <Box
          sx={{
            width: '100%', height: '200px', maxWidth: '80%', bgcolor: 'background.paper', border: '1px solid #D3D3D3', margin: 'auto', boxSizing: 'border-box',
          }}>
      </Box>

        <Box
          sx={{
            width: '100%', height: '100%', maxWidth: '80%', bgcolor: 'background.paper', margin: 'auto', boxSizing: 'border-box',
          }}>
        <h1>Select a plan:</h1>
        <MealList/>
      </Box>

      {/* </Grid>
      </Grid> */}
    </>
  );
}
