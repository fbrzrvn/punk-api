import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useFavoriteBeer from '../../hooks/useFavoriteBeer';

import useStyles from './styles';

const BeerCard = ({ beer }) => {
	const { favorite, toggleFavoriteBeers } = useFavoriteBeer();
	const [showFood, setShowFood] = useState(false);
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<Card className={classes.card}>
				<Grid container direction="row" justify="flex-end">
					<Grid>
						<Button
							className={classes.btn}
							color="primary"
							variant="outlined"
							component={Link}
							to={`/beers?brewed_after=${beer.first_brewed}`}
						>
							First Brewed {beer.first_brewed}
						</Button>
					</Grid>
				</Grid>
				<CardActions>
					<CardMedia
						className={classes.cardMedia}
						component="img"
						image={beer.image_url}
						title={beer.name}
					/>
					<CardContent className={classes.cardContent}>
						<Typography variant="h3" component="h2">
							{beer.name}
						</Typography>
						<Typography variant="h2" color="textSecondary" component="p">
							{beer.tagline}
						</Typography>
						<Typography variant="body1" gutterBottom>
							{beer.description}
						</Typography>
						<Grid container direction="row" spacing={2}>
							<Grid item>
								<Typography variant="h6" color="textSecondary">
									abv: {beer.abv}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="h6" color="textSecondary">
									ibu: {beer.ibu}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="h6" color="textSecondary">
									ebc: {beer.ebc}
								</Typography>
							</Grid>
						</Grid>
						<Button
							variant="outlined"
							color="primary"
							className={classes.cardBtn}
							onClick={() => setShowFood(prevVal => !prevVal)}
						>
							Food Pairing
						</Button>
						{showFood ? (
							<List dense>
								{beer.food_pairing.map((food, index) => (
									<ListItem key={index}>
										<ListItemText primary={food} />
									</ListItem>
								))}
							</List>
						) : null}
					</CardContent>
				</CardActions>
				<Button
					className={classes.cardFavorite}
					onClick={() => toggleFavoriteBeers(beer.id)}
				>
					{favorite[beer.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</Button>
			</Card>
		</Container>
	);
};

export default BeerCard;
