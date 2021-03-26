import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		height: '100%',
		padding: theme.spacing(2),
	},
	cardImage: {
		width: '80px',
		heigth: '80px',
		margin: '0 auto 16px',
	},
	cardAction: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cardFavorite: {
		marginLeft: 'auto',
		color: red[500],
	},
	cardLink: {
		textDecoration: 'none',
	},
}));
