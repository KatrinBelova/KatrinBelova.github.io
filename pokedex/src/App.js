import { useEffect, useState } from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import PokeDetails from './components/PokeDetails';
import PokeList from './components/PokeList';
import Modal from './components/common/Modal';

function App() {
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selected) setIsOpen(true);
  }, [selected]);

  const handleClose = () => {
    setIsOpen(false);
    setSelected(null);
  };

  const isTablet = useMediaQuery('(min-width:900px)');

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={2} mb={8} mt={8}>
          <Grid item xs={12} md={12}>
            <Typography align="center" variant="h2">
              Pokedex
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <PokeList setSelected={setSelected} />
          </Grid>
          {isTablet ? (
            <Grid item xs={12} md={4}>
              <PokeDetails selected={selected} />
            </Grid>
          ) : (
            <Modal
              isOpen={isOpen}
              handleClose={handleClose}
              modalName="pokemon"
              modalDescription={selected?.name}
            >
              <PokeDetails selected={selected} />
            </Modal>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
