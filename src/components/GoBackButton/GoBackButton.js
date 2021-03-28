import React from 'react';
import { Button } from '@material-ui/core';

const GoBackButton = ({ history }) => {
	return (
		<Button
			variant="outlined"
			color="primary"
			fullWidth
			onClick={() => history.goBack()}
		>
			Go Back
		</Button>
	);
};

export default GoBackButton;
