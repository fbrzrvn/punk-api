import {
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BeerCard from '../components/BeerCard';
import MainLayout from '../Layout/MainLayout';

const Beer = ({ match, history }) => {
  const [beer, setBeer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { beerId } = match.params;

  useEffect(() => {
    const getBeer = async () => {
      const res = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`);
      setBeer(res.data);
      setIsLoading(false);
    };
    getBeer();
  }, [beerId]);

  return (
    <MainLayout>
      <Container>
        {isLoading ? (
          <Grid container justify="center">
            <Typography variant="h3" color="secondary" aling="center">
              Loading...
              <CircularProgress color="secondary" />
            </Typography>
          </Grid>
        ) : (
          <Container>
            {beer.map(b => (
              <BeerCard key={b.id} beer={b} history={history} />
            ))}
          </Container>
        )}
      </Container>
    </MainLayout>
  );
};

export default Beer;
