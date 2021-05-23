import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    margin: '0 auto 50px',
    padding: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    background: '#fff',
  },
  link: {
    textDecoration: 'none',
  },
  searchBar: {
    flex: 1,
    marginLeft: theme.spacing(3),
  },
}));
