import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@material-ui/core';

import BeerCard from '../components/BeerCard';

const Beer = ({ match }) => {
	const [beer, setBeer] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { beerId } = match.params;

	useEffect(() => {
		const getBeer = async () => {
			const res = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`);
			setBeer(res.data);
			setIsLoading(false);
		};
		getBeer();
	}, [beerId]);

	return (
		<Container>
			{isLoading ? (
				<Grid container justify="center">
					<Typography variant="h3" color="secondary" aling="center">
						Loading...
					</Typography>
				</Grid>
			) : (
				<Container>
					{beer.map(b => (
						<BeerCard key={b.id} beer={b} />
					))}
				</Container>
			)}
		</Container>
	);
};

export default Beer;
