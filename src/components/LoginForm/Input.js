import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({
	autoFocus,
	handleChange,
	handleShowPassword,
	label,
	name,
	type,
}) => {
	return (
		<Grid item xs={12}>
			<TextField
				name={name}
				onChange={handleChange}
				variant="outlined"
				margin="normal"
				required
				fullWidth
				label={label}
				autoFocus={autoFocus}
				type={type}
				InputProps={
					name === 'password'
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleShowPassword}>
											{type === 'password' ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
						  }
						: null
				}
			/>
		</Grid>
	);
};

export default Input;
