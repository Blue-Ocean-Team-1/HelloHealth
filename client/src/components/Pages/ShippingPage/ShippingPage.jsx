import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const dummyAddress = {
  first_name: 'Joe',
  last_name: 'Smoe',
  address: '123 Amazing Blvd',
  city: 'Los Angeles',
  state: 'CA',
  zip_code: 123123,
  email: 'joeSmoe999@gmail.com',
  user_id: 9978978,
};

const ShippingPage = () => {
  const [newAddressClicked, setNewAddressClicked] = useState(false);
  const [selectBoxDates, setSelectBoxDates] = useState([]);
  const [expectedExpressDate, setExpectedExpressDate] = useState('');
  const [expectedStandardDate, setExpectedStandardDate] = useState('');
  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState(dummyAddress.first_name);
  const [lastName, setLastName] = useState(dummyAddress.last_name);
  const [address, setAddress] = useState(dummyAddress.address);
  const [city, setCity] = useState(dummyAddress.city);
  const [state, setState] = useState(dummyAddress.state);
  const [zipcode, setZipcode] = useState(dummyAddress.zip_code);
  const [email, setEmail] = useState(dummyAddress.email);
  const [deliveryInstructions, setDeliveryInstructions] = useState('N/A');

  const getSelectDates = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dates = [];
    for (let i = 0; i < 10; i += 1) {
      const selectShipDate = new Date();
      selectShipDate.setDate(selectShipDate.getDate() + i + 4);
      const humanReadableDate = selectShipDate.toLocaleDateString('en-US', options);
      dates.push(humanReadableDate);
    }
    setSelectBoxDates(dates);
  };

  const handleNewShipAddress = () => {
    setNewAddressClicked(!newAddressClicked);
  };

  const getExpressShipDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const expressShipDate = new Date();
    expressShipDate.setDate(expressShipDate.getDate() + 2);

    const humanReadableDate = expressShipDate.toLocaleDateString('en-US', options);
    setExpectedExpressDate(humanReadableDate);
    // console.log('EXPRESS SHIP EXPECTED', expressShipDate.toLocaleDateString('en-US', options));
  };

  const getStandardShipDate = () => {
    const standardShipDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    standardShipDate.setDate(standardShipDate.getDate() + 6);
    const humanReadableDate = standardShipDate.toLocaleDateString('en-US', options);
    setExpectedStandardDate(humanReadableDate);
    // console.log('STANDARD SHIP EXPECTED', standardShipDate.toLocaleDateString('en-US', options));
  };

  const getDay = () => {
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    // console.log('TODAY', date.toLocaleDateString('en-US', options));
    getExpressShipDate();
    getStandardShipDate();
  };

  useEffect(() => {
    getDay();
    getSelectDates();
  }, []);

  const NewShippingAddress = () => {
    if (newAddressClicked) {
      return (
        <>
          <Grid container spacing={2}
            sx={{
              border: 1,
              borderRadius: '5px',
              // borderColor: '#d3d3d3',
              width: '100%',
              paddingBottom: '1em',
              marginTop: '1em',
            }}
          >

            <Grid item xs={6}>
              <label>First Name</label> <br />
              <input style={{ width: '90%' }} onChange={(e) => setFirstName(e.target.value)} type="text" value={firstName} />
            </Grid>
            <Grid item xs={6} >
              <label>Last Name</label> <br />
              <input style={{ width: '75%' }} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
              <label>Shipping Address</label> <br />
              <input style={{ width: '90%' }} type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Grid>

            <Grid item xs={6}>
              <label>Zip Code</label> <br />
              <input style={{ width: '75%' }} type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </Grid>

            <Grid item xs={6}>
              <label for="city">City</label> <br />
              <input style={{ width: '90%' }} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </Grid>

            <Grid item xs={6}>
              <label for="state">State:</label> <br />
              <select value={state} onChange={(e) => setState(e.target.value)} style={{ width: '77%' }}>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              <label for="email">Email</label> <br />
              <input type="text" value={email} style={{ width: '90%' }} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <label for="delivery_instuctions">Special Delivery Instructions</label> <br />
              <input type="text" placeholder='e.g. Leave at the front door' value={deliveryInstructions} onChange={(e) => setDeliveryInstructions(e.target.value)} style={{ width: '80%' }} />
            </Grid>
          </Grid>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <h1>Delivery Information:</h1>

      <Grid container spacing={2}
        sx={{
          border: 1,
          borderRadius: '5px',
          // borderColor: '#d3d3d3',
          width: '100%',
          paddingBottom: '1em',
          marginTop: '1em',
        }}
      >
        <Grid item xs={12}>
          <h3 style={{ margin: '0' }}>Default Address</h3>
          <div>{dummyAddress.first_name} {dummyAddress.last_name}</div>
          <div>Email: {dummyAddress.email}</div>
          &nbsp;
          <div>Shipping Address: <br />
            {dummyAddress.address} <br />
            {dummyAddress.city}, {dummyAddress.state} &nbsp;
            {dummyAddress.zip_code}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item style={{ paddingTop: '0.4em' }}>
          {!newAddressClicked
            && <Button variant='contained' onClick={handleNewShipAddress}>
              SHIP TO DIFFERENT ADDRESS
            </Button>}

          <div>{NewShippingAddress()}</div>
        </Grid>

        <Grid item style={{ paddingTop: '0.4em' }}>
          {newAddressClicked
            && <Button variant='contained' onClick={handleNewShipAddress}>
              Cancel
            </Button>}
        </Grid>
      </Grid>

      <h1>Order Summary:</h1>
      {/* if box and product is selected
            POPUP that says the product will be shipped with the box
      */}
      {/* Select Drop Down Containing Dates */}
      {/* Delivery Day choices */}

      <Grid container spacing={2}
        sx={{
          border: 1,
          borderRadius: '5px',
          width: '100%',
          paddingBottom: '10px',
        }}
      >
        {/* <Grid item xs={12}> */}
        {/* If a box is found in the cart, this needs to be rendered */}
        {/* <h3 style={{ margin: '0' }}>Box Delivery Options:</h3>
          <select style={{ width: '90%' }}>
            <option value='initial'>-</option>
            {selectBoxDates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select> */}

        {/* </Grid> */}
        <Grid item xs={12}>

          <h3 style={{ margin: '0' }}>Box Delivery Options:</h3>
          <select style={{ width: '90%' }}>
            <option value='initial'>-</option>
            {selectBoxDates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
          {/* If an individual product is found in the cart, this needs to be rendered */}
          <h3 style={{ margin: '0', paddingTop: '0.2em' }}>Product Delivery Options:</h3>
          <select style={{ width: '90%' }}>
            <option value='initial'>-</option>
            <option value={expectedStandardDate}>
              Standard (Expected Delivery {expectedStandardDate})
            </option>
            <option value={expectedExpressDate}>
              Express (Expected Delivery {expectedExpressDate})
            </option>
          </select>
        </Grid>

        <Grid item align='start' xs={6}>
          <span>Reccuring Cost:</span>
        </Grid>
        <Grid item align='center' xs={6}>
          <span>$9.99</span>
        </Grid>
        <Grid item align='start' xs={6}>
          <span>Produce Cost:</span>
        </Grid>
        <Grid item align='center' xs={6}>
          <span>$9.99</span>
        </Grid>
        <Grid item align='start' xs={6}>
          <span>Shipping:</span>
        </Grid>
        <Grid item align='center' xs={6}>
          <span>$9.99</span>
        </Grid>
        <Grid item align='center' borderBottom='1px solid black' xs={12}>
        </Grid>
        <Grid item align='start' xs={6}>
          <span>Total Cost:</span>
        </Grid>
        <Grid item align='center' xs={6}>
          <span>$9.99</span>
        </Grid>

        {/* <div> ORDER INFO</div>
          <div> WEEKLY PLAN</div>
          <div> RECURRING COST</div>
          <div> PRODUCE COST</div>
          <div> SHIP COST</div>
          <div> TOTAL COST</div> */}
        {/* &nbsp; */}
        <Grid item xs={12}>
          <div>Shipping To: <br />
            {address} <br />
            {city}, {state} &nbsp;
            {zipcode} <br />
            Delivery Instructions: {deliveryInstructions}
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item style={{ paddingTop: '0.4em' }}>
          <Button variant="contained" >Continue to Billing</Button>
        </Grid>
      </Grid>

    </>
  );
};

export default ShippingPage;

// SHIPPING
// SELECT ADDRESS FROM ACCOUNT
// STREET ADDRESS
// ZIP CODE
// CITY/STATE
// NAME
// -- GET FROM DATABASE --

// INPUTS TO CREATE A NEW SHIP ADDRESS
// STREET ADDRESS
// ZIP CODE
// CITY/STATE
// NAME
// -- POST TO DATABASE --

// DELIVERY BOX
// DELIVERY OPTIONS
// SELECT A DAY MON–SAT OPTIONS?
// -- POST TO DATABASE --

// RECURRING
// SELECT WEEKLY/BIWEEKLY/MONTHLY
// -- POST TO DATABASE --

// DELIVERY INDIVIDUAL PRODUCTS
// SHIPPING OPTIONS -- WHAT TO DO WITH THIS DATA?
// STANDARD
// EXPRESS
// NEXT DAY
// SAVE WHAT TO DB?
// PRODUCT
// SHIP OPTION
// SHIP DATE?
// USER NAME
// USER ADDRESS
// ADD EMAIL NOTIFICATION IF WE HAVE TIME