import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';

import { logout } from '../../actions/user';

import useStyles from './styles';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const history = useHistory();
  const classes = useStyles();

  const handleLogout = () => {
    dispatch(logout(history));
  };

  return (
    <Container className={classes.root}>
      <Grid container aling="center">
        <Grid item>
          <NavLink to="/" exact className={classes.link}>
            <Typography variant="h4" color="primary">
              Punk API
            </Typography>
          </NavLink>
        </Grid>
        <Grid item className={classes.authWrap}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.indigo} />
              <Typography className={classes.userName} variant="h6">
                {user.firstName}
              </Typography>
              <Button
                variant="outlined"
                className={classes.logout}
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <NavLink to="/login" className={classes.link}>
              <Button variant="outlined" color="primary">
                Login
              </Button>
            </NavLink>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
