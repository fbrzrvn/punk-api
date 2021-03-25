import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
	btn: {
		marginBottom: theme.spacing(2),
	},
	card: {
		heigth: '100%',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(2),
	},
	cardMedia: {
		width: '100px',
		margin: '16px auto',
	},
	cardContent: {
		flexGrow: '1',
	},
	cardBtn: {
		marginTop: theme.spacing(2),
	},
	cardFavorite: {
		marginLeft: 'auto',
		color: red[500],
	},
}));
