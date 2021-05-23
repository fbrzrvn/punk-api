import { indigo, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
    padding: theme.spacing(2),
    position: 'relative',
  },
  cardImage: {
    width: '50px',
    heigth: '50px',
    margin: '0 auto 16px',
  },
  CardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardFavorite: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    marginLeft: 'auto',
    color: red[500],
  },
  cardLink: {
    textDecoration: 'none',
    marginTop: theme.spacing(2),
    '&:hover': {
      textDecoration: 'underLine',
      color: indigo[500],
    },
  },
}));
