import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, List, Typography } from '@material-ui/core';
import axios from 'axios';

import BeerList from '../components/BeerList';

import useStyles from '../styles';

const Home = () => {
	const [beers, setBeers] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	const classes = useStyles();

	useEffect(() => {
		const fetchBeers = async () => {
			const res = await axios.get(
				`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
			);
			setBeers(res.data);
			setLoading(false);
		};
		fetchBeers();
	}, [page]);

	return (
		<Container className={classes.root} maxWidth="md">
			{loading ? (
				<Grid container justify="center">
					<Typography variant="h3" color="secondary" aling="center">
						Loading...
					</Typography>
				</Grid>
			) : (
				<>
					<Grid container justify="center">
						<List className={classes.list}>
							{beers.map(beer => (
								<BeerList key={beer.id} beer={beer} />
							))}
						</List>
					</Grid>
					<Grid container justify="flex-end">
						{page > 1 ? (
							<Grid item>
								<Button
									variant="outlined"
									color="primary"
									onClick={() => setPage(prevPage => prevPage - 1)}
								>
									Prev
								</Button>
							</Grid>
						) : null}
						{page <= 36 ? (
							<Grid item>
								<Button
									variant="outlined"
									color="primary"
									onClick={() => setPage(prevPage => prevPage + 1)}
								>
									Next
								</Button>
							</Grid>
						) : null}
					</Grid>
				</>
			)}
		</Container>
	);
};

export default Home;
