import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
	card: {
		heigth: '100%',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(2),
	},
	btn: {
		margin: theme.spacing(2),
	},
	cardImage: {
		width: '80px',
		margin: 'auto',
	},
	cardFavorite: {
		marginLeft: 'auto',
		color: red[500],
	},
}));
