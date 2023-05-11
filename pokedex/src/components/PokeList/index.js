import { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import PokeCard from '../PokeCard';
import { getPokemonList, loadMorePokemonList } from '../../api';

const PokeList = ({ setSelected }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState('');

  const getPokemons = async () => {
    await getPokemonList()
      .then((res) => {
        if (res.status === 200) {
          setList(res.data.results);
          setNextPage(res.data.next);
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleLoadMore = async (nextUrl) => {
    setLoading(true);
    await loadMorePokemonList(nextUrl)
      .then((res) => {
        if (res.status === 200) {
          setList(list.concat(res.data.results));
          setNextPage(res.data.next);
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Grid container spacing={2}>
        {list?.length > 0 &&
          list.map((item) => (
            <Grid item key={item?.url} xs={6} md={4}>
              <PokeCard
                name={item?.name}
                url={item?.url}
                setSelected={setSelected}
              />
            </Grid>
          ))}
      </Grid>
      <Box mt={2}>{loading && <CircularProgress thickness={6} />}</Box>
      {list?.length > 0 && (
        <Box mt={2}>
          <Button
            disabled={loading || !nextPage}
            variant="contained"
            onClick={() => handleLoadMore(nextPage)}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PokeList;
