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


function App() {
  return (
    /*main start*/
    <div class="body">
      <div class="header">
        <h1 class="text-logo">DineOut</h1>
        {/* <button id="button-load-db">LoadDB</button> */}
      </div>

      <div class="content-centered">
        <Card variant="outlined" sx={{maxWidth: 300}}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={require("./cat1.jpg")} alt="fat cat">
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Arabian Palace
            </Typography>
            <Typography variant="body2">
              Very nice!
            </Typography>
          </CardContent>
          <CardActions>
            <Chip label="Non-veg" icon={<GrassIcon/>}/>
            <Chip label="Arabic"/>
            <Chip label="Halal"/>
          </CardActions>
          <CardActions>
            <IconButton size="small" color="primary">
              <ShareIcon/>
            </IconButton>
            <Button disabled sx={{flexGrow:1}}></Button>
            <Button size="small" color="primary">
              Book
            </Button>
          </CardActions>
        </Card>

        <Card variant="outlined" sx={{maxWidth: 300}}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={require("./cat1.jpg")} alt="fat cat">
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Farha
            </Typography>
            <Typography variant="body2">
              Very nice!
            </Typography>
          </CardContent>
          <CardActions>
            <Chip label="Non-veg" icon={<GrassIcon/>}/>
            <Chip label="Arabic"/>
            <Chip label="Halal"/>
          </CardActions>
          <CardActions>
            <IconButton size="small" color="primary">
              <ShareIcon/>
            </IconButton>
            <Button disabled sx={{flexGrow:1}}></Button>
            <Button size="small" color="primary">
              Book
            </Button>
          </CardActions>
        </Card>

        <Card variant="outlined" sx={{maxWidth: 300}}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={require("./cat1.jpg")} alt="fat cat">
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MaxFun
            </Typography>
            <Typography variant="body2">
              Very nice!
            </Typography>
          </CardContent>
          <CardActions>
            <Chip label="Non-veg" icon={<GrassIcon/>}/>
            <Chip label="Arabic"/>
            <Chip label="Halal"/>
          </CardActions>
          <CardActions>
            <IconButton size="small" color="primary">
              <ShareIcon/>
            </IconButton>
            <Button disabled sx={{flexGrow:1}}></Button>
            <Button size="small" color="primary">
              Book
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
export default App;
