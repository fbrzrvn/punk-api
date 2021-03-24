import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Grid container aling="center" spacing={(0, 2)}>
				<Grid item>
					<Typography variant="h5">Punk API</Typography>
				</Grid>
				<Grid item>
					<Button contained>
						<NavLink to="/" className={classes.link}>
							Home
						</NavLink>
					</Button>
				</Grid>
				<Grid item>
					<Button>
						<NavLink to="/beers/finder" className={classes.link}>
							Finder
						</NavLink>
					</Button>
				</Grid>
				<Grid item className={classes.authBtn}>
					<Button variant="outlined" color="primary">
						Logout
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Header;
