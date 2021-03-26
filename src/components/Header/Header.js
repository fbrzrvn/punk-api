import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Grid container aling="center">
				<Grid item>
					<NavLink to="/" exact className={classes.link}>
						<Typography variant="h5" component="p" color="primary">
							Punk API
						</Typography>
					</NavLink>
				</Grid>
				<Grid item className={classes.authBtn}>
					<NavLink to="/login" className={classes.link}>
						<Button variant="outlined" color="primary">
							Login
						</Button>
					</NavLink>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Header;
