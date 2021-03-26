import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	CircularProgress,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';

import BeerGrid from '../components/BeerGrid';
import GoBackButton from '../components/GoBackButton';

const Find = ({ location, history }) => {
	const [beer, setBeer] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { search } = location;
	const parseBrewedDate = search.split('=')[1];

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
						<Grid item key={b.id} xs={12} sm={6} md={4}>
							<BeerGrid beer={b} history={history} />
						</Grid>
					))}
					{beer.length === 0 ? (
						<Grid container justify="center" spacing={5}>
							<Grid item sm={12} md={6}>
								<Typography variant="h4" color="secondary" align="center">
									No beers brewed after {parseBrewedDate} was found!
								</Typography>
								<GoBackButton history={history} />
							</Grid>
						</Grid>
					) : null}
				</Grid>
			)}
		</Container>
	);
};

export default Find;
