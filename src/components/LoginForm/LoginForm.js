import { useState } from 'react';
import {
	Avatar,
	Box,
	Button,
	CssBaseline,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input';
import Copyright from './Copyright';

import useStyles from './styles';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const LoginForm = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState(initialState);
	const classes = useStyles();

	const handleShowPassword = () => {
		setShowPassword(prevShoWPassword => !prevShoWPassword);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const switchMode = () => {
		setIsSignUp(prevMode => !prevMode);
		setShowPassword(false);
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{isSignUp ? 'Sign In ' : 'Sign Up'}
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							{isSignUp && (
								<>
									<Input
										name="firstName"
										label="First Name"
										handleChange={handleChange}
										autoFocus
									/>
									<Input
										name="lastName"
										label="Last Name"
										handleChange={handleChange}
									/>
								</>
							)}
							<Input
								name="email"
								label="Email Address"
								handleChange={handleChange}
								autoFocus
							/>
							<Input
								name="password"
								label="password"
								type={showPassword ? 'text' : 'password'}
								handleShowPassword={handleShowPassword}
								handleChange={handleChange}
							/>
							{isSignUp && (
								<Input
									name="confirmPassword"
									label="Repeat Password"
									type="password"
									handleChange={handleChange}
								/>
							)}
						</Grid>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							className={classes.submit}
						>
							{isSignUp ? 'Sign Up' : 'Sign In'}
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link variant="body2" onClick={switchMode}>
									{isSignUp
										? 'Already have an account? Sign In'
										: "Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

export default LoginForm;
