import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Skeleton, Typography } from '@mui/material';
import СreatureTypes from '../СreatureTypes';
import styles from './PokeCard.module.css';
import { capitalizeFirstLetter } from '../../utils/index';
import Picture from '../common/Picture';

const CardSkeleton = () => {
  return (
    <>
      <Skeleton
        sx={{ height: 200 }}
        animation="wave"
        variant="rectangular"
        style={{ marginBottom: 6 }}
      />
      <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={20} width="20%" />
    </>
  );
};

const PokeCard = ({ name, url, setSelected }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { card, title } = styles;

  const getPokemon = async () => {
    await axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          setPokemonData(res.data);
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPokemon();
  }, [url]);

  return (
    <Card className={card} onClick={() => setSelected(pokemonData)}>
      <CardContent>
        {loading ? (
          <CardSkeleton />
        ) : (
          <>
            <Picture
              src={
                pokemonData?.sprites?.other?.['official-artwork']?.front_default
              }
              alt={name}
            />
            <Typography align="center" mt={2} className={title}>
              {capitalizeFirstLetter(name)}
            </Typography>
            <Box mt={2}>
              <СreatureTypes types={pokemonData?.types} />
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PokeCard;
