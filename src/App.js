import logo from './logo.svg';
import './App.css';

import * as React from 'react';

import Button from "@mui/material/Button";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import GrassIcon from '@mui/icons-material/Grass';


import { CardActions, Chip, Rating } from '@mui/material';


function App() 
{
  const hotels = [
    {id: 1, name: "Arabian Palace"},
    {id: 2, name: "MaxFun"},
    {id: 3, name: "Mamma's"},
    {id: 4, name: "Kubaba"},
  ];

  function shareClick(hotelID)
  {
    console.log(`Share clicked id: ${hotelID}`);
  }

  function bookClick(hotelID)
  {
    console.log(`Book clicked id: ${hotelID}`);
  }

  const hotel_cards = hotels.map(hotel=>
    <Card variant="outlined" sx={{maxWidth: 300}}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={require("./cat1.jpg")} alt="fat cat">
          </CardMedia>
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hotel.name}
          </Typography>
          <Typography variant="body2">
            Very nice!
          </Typography>
        </CardContent>
        <CardActions>
          <Chip label="Non-veg"/>
          <Chip label="Arabic"/>
          <Chip label="Halal"/>
        </CardActions>
        <CardActions>
          <IconButton onClick={()=>shareClick(hotel.id)} size="small" color="primary">
            <ShareIcon/>
          </IconButton>
          <Button disabled sx={{flexGrow:1}}></Button>
          <Button onClick={()=>bookClick(hotel.id)} size="small" color="primary">
            Book
          </Button>
        </CardActions>
    </Card>
  );

  return (
    /*main start*/
    <div class="body">
      <div class="header">
        <h1 class="text-logo">DineOut</h1>
        {/* <button id="button-load-db">LoadDB</button> */}
      </div>

      <div class="content-centered">
        {hotel_cards}
      </div>
    </div>
  );
}
export default App;
