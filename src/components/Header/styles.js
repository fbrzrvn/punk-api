import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

export default makeStyles(theme => ({
	root: {
		alignItems: 'center',
		margin: '20px auto',
	},
	link: {
		textDecoration: 'none',
	},
	authWrap: {
		marginLeft: 'auto',
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	indigo: {
		color: theme.palette.getContrastText(indigo[500]),
		backgroundColor: indigo[500],
		marginRight: theme.spacing(2),
	},
}));
