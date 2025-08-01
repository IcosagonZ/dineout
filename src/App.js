import './App.css';

import * as React from 'react';
import axios from 'axios';

import {Snackbar, ThemeProvider,createTheme} from '@mui/material';
import { CardActions, Chip, Rating } from '@mui/material';

import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

import ShareIcon from '@mui/icons-material/Share';
import GrassIcon from '@mui/icons-material/Grass'; // Veg icon


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() 
{
  // UI variables

  // Snackbar for alerts
  const [snackbarOpen, snackbarSetOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("N/A");

  var snackbarAutoCloseDuration=5000;
  const snackbarHandleClose=(event, reason)=>
  {
    snackbarSetOpen(false);
  };

  // Hotel cards data
  const [hotelsLoaded, setHotelsLoaded] = React.useState(false);
  const [hotelsList, setHotelsList] = React.useState(
    [{0:0, 1:"N/A", 2:0.0}],
  );

  function shareClick(hotelID)
  {
    console.log(`Share clicked id: ${hotelID}`);
  }

  function bookClick(hotelID)
  {
    console.log(`Book clicked id: ${hotelID}`);
  }

  function accessDB()
  {
    setSnackbarMessage("Connecting to DB API...");
    snackbarSetOpen(true);

    axios.get("http://127.0.0.1:8000/restaurants").then(
      function(response){
        console.log(response);
        setSnackbarMessage("DB accessed");
        setHotelsList(response.data.data);
      }
    ).catch(
      function(error){
        console.log(error);
        setSnackbarMessage("Error accessing DB");
      }
    )

    
  }
  /*
  0 rid
  1 name
  2 cuisine
  3 veg/nonveg
  4 halal
  5 price_start
  6 seats_available
  7 seats_total
  8 description
  9 rating
  10 lat
  11 long
  12 address
  */

  const hotel_cards = hotelsList.map(hotel=>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} key={hotel.id} variant="outlined" sx={{maxWidth: 300}}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={require("./cat1.jpg")} alt="fat cat">
          </CardMedia>
        </CardActionArea>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {hotel[1]}
          </Typography>
          <Typography variant="body2">
            {hotel[3]} {hotel[2]} restaurant.
          </Typography>
        </CardContent>
        <CardActions>
          <Chip label={hotel[3]}/>
          <Chip label={hotel[2]}/>
          <Chip label={hotel[4]}/>
        </CardActions>
        <CardActions sx={{flexGrow: 1}}>
          <IconButton onClick={()=>shareClick(hotel[0])} size="small" color="primary">
            <ShareIcon/>
          </IconButton>
          <Button disabled sx={{flexGrow:1}}></Button>
          <Button onClick={()=>bookClick(hotel[0])} size="small" color="primary">
            Book
          </Button>
        </CardActions>
    </Card>
  );

  return (
    /*main start*/
    <ThemeProvider theme={darkTheme}>
    <div class="body">
      <div class="header">
        <div class="text-logo">DineOut</div>
        <div class="header-content-right">
          <Button onClick={accessDB} color="primary">Connect DB</Button>
        </div>
      </div>

      <div class="body-content">
        <div class="content-centered">
          <Grid container spacing={2} sx={{justifyContent: "center", alignItems: "center",}}>
            {hotel_cards}
          </Grid>
        </div>
      </div>
    </div>

    <Snackbar autoHideDuration={snackbarAutoCloseDuration} message={snackbarMessage} open={snackbarOpen} onClose={snackbarHandleClose}></Snackbar>
    </ThemeProvider>
  );
}
export default App;
