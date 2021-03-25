import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	CircularProgress,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';

import BeerGrid from '../components/BeerGrid';

const Find = ({ location }) => {
	const [beer, setBeer] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { search } = location;

	useEffect(() => {
		const getBeer = async () => {
			const res = await axios.get(`https://api.punkapi.com/v2/beers${search}`);
			setBeer(res.data);
			setIsLoading(false);
		};
		getBeer();
	}, [search]);

	return (
		<Container>
			{isLoading ? (
				<Grid container justify="center">
					<Typography variant="h3" color="secondary" aling="center">
						Loading...
						<CircularProgress color="secondary" />
					</Typography>
				</Grid>
			) : (
				<Grid container spacing={3}>
					{beer.map(b => (
						<Grid item xs={12} sm={6} md={4}>
							<BeerGrid key={b.id} beer={b} />
						</Grid>
					))}
				</Grid>
			)}
		</Container>
	);
};

export default Find;
