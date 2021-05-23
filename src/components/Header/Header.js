import { Container, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container align="center">
        <Grid item>
          <NavLink to="/" exact className={classes.link}>
            <Typography variant="h4" color="primary">
              Punk API
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
