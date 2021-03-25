import React from 'react';
import { Link } from 'react-router-dom';
import {
	Avatar,
	Divider,
	IconButton,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { red } from '@material-ui/core/colors';

import useFavoriteBeer from '../../hooks/useFavoriteBeer';

const BeerList = ({ beer }) => {
	const { favorite, toggleFavoriteBeers } = useFavoriteBeer();

	return (
		<>
			<ListItem button component={Link} to={`/beers/${beer.id}`}>
				<ListItemAvatar>
					<Avatar src={beer.image_url} alt={beer.name} />
				</ListItemAvatar>
				<ListItemText primary={beer.name} secondary={beer.tagline} />
				<ListItemSecondaryAction>
					<IconButton
						style={{ color: red[500] }}
						edge="end"
						aria-label="favorite"
						onClick={() => toggleFavoriteBeers(beer.id)}
					>
						{favorite[beer.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
			<Divider />
		</>
	);
};

export default BeerList;
