import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
	const [isLog, setIsLog] = useState(false);
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth="md">
			<Grid container aling="center" spacing={(0, 2)}>
				<Grid item>
					<NavLink to="/" exact className={classes.link}>
						<Typography variant="h5" component="p" color="primary">
							Punk API
						</Typography>
					</NavLink>
				</Grid>
				<Grid item></Grid>
				<Grid item className={classes.authBtn}>
					<Button variant="outlined" color="primary">
						{isLog ? 'Logout' : 'Login'}
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Header;
