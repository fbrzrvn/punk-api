import React from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useFavoriteBeer from '../../hooks/useFavoriteBeer';

import useStyles from './styles';

const BeerGrid = ({ beer }) => {
	const { favorite, toggleFavoriteBeers } = useFavoriteBeer();
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardMedia
				component="img"
				image={beer.image_url}
				title={beer.name}
				className={classes.cardImage}
			/>
			<CardContent>
				<Typography variant="h5">{beer.name}</Typography>
				<Typography variant="body1" color="textPrimary">
					{beer.tagline}
				</Typography>
				<Grid container direction="row" spacing={2}>
					<Grid item>
						<Typography variant="p" color="textSecondary">
							abv: {beer.abv}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="p" color="textSecondary">
							ibu: {beer.ibu}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="p" color="textSecondary">
							ebc: {beer.ebc}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Button
					className={classes.btn}
					color="primary"
					variant="outlined"
					component={Link}
					to={`/beers?brewed_after=${beer.first_brewed}`}
				>
					First Brewed {beer.first_brewed}
				</Button>
				<Button
					className={classes.cardFavorite}
					onClick={() => toggleFavoriteBeers(beer.id)}
				>
					{favorite[beer.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</Button>
			</CardActions>
			<Grid container direction="row" justify="flex-end">
				<Grid></Grid>
			</Grid>
		</Card>
	);
};

export default BeerGrid;
