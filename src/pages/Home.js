import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BeerGrid from '../components/BeerGrid';
import MainLayout from '../Layout/MainLayout';
import useStyles from '../styles';

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const fetchBeers = async () => {
      const res = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
      );
      setBeers(res.data);
      setLoading(false);
    };
    fetchBeers();
  }, [page]);

  return (
    <MainLayout>
      <Container className={classes.root} maxWidth="lg">
        {loading ? (
          <Grid container justify="center">
            <Typography variant="h3" color="secondary" align="center">
              Loading...
              <CircularProgress color="secondary" />
            </Typography>
          </Grid>
        ) : (
          <>
            <Grid container spacing={3}>
              {beers.map(beer => (
                <Grid
                  key={beer.id}
                  item
                  justify="center"
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Paper elevation={3} className={classes.fixedHeightPaper}>
                    <BeerGrid beer={beer} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Grid container className={classes.btnPages} justify="flex-end">
              {page > 1 && (
                <Grid item>
                  <Button
                    color="primary"
                    onClick={() => setPage(prevPage => prevPage - 1)}
                  >
                    Prev
                  </Button>
                </Grid>
              )}
              <Grid item zeroMinWidth>
                <Typography variant="h6" color="textSecondary">
                  {page}
                </Typography>
              </Grid>
              {page <= 36 && (
                <Grid item>
                  <Button
                    color="primary"
                    onClick={() => setPage(prevPage => prevPage + 1)}
                  >
                    Next
                  </Button>
                </Grid>
              )}
            </Grid>
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export default Home;
