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
import GoBackButton from '../GoBackButton';

import useStyles from './styles';

const BeerGrid = ({ beer, history }) => {
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
			<CardContent>
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
			<CardActions className={classes.cardAction}>
				<Button
					component={Link}
					to={`/beers?brewed_after=${beer.first_brewed}`}
					color="primary"
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
			<GoBackButton history={history} />
		</Grid>
	);
};

export default BeerGrid;
