import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import { Link } from 'react-router-dom';
import useFavoriteBeer from '../../hooks/useFavoriteBeer';
import useStyles from './styles';

const BeerGrid = ({ beer }) => {
  const { favorite, toggleFavoriteBeers } = useFavoriteBeer();
  const classes = useStyles();

  return (
    <Grid item component={Card} className={classes.card}>
      <CardMedia
        component="img"
        image={beer.image_url}
        title={beer.name}
        className={classes.cardImage}
      />
      <Button
        className={classes.cardFavorite}
        onClick={() => toggleFavoriteBeers(beer.id)}
      >
        {favorite[beer.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Button>
      <CardContent className={classes.CardContent}>
        <Link to={`/beers/${beer.id}`} className={classes.cardLink}>
          <Typography variant="h5" color="primary">
            {beer.name}
          </Typography>
        </Link>
        <Typography variant="body1" color="textPrimary">
          {beer.tagline}
        </Typography>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              abv: {beer.abv}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              ibu: {beer.ibu}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              ebc: {beer.ebc}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Grid>
  );
};

export default BeerGrid;
