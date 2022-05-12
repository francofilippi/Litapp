import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// Provider para lógica
import LitaProvider from '../Components/LitaContext';

// Provider para theme
import ThemePaletteComponentsToggle from './litaTheme';

// Containers
import Navbar from '../Containers/Navbar';
import Body from '../Containers/Body';
import Footer from '../Containers/Footer';

// CSS
import './App.css';

function App() {

  return (
    <LitaProvider>
      <ThemePaletteComponentsToggle>
        <Box className='main-container' sx={{ backgroundColor: 'background.default' }}>
          <Navbar />
          <Container maxWidth="xl" sx={{ marginTop: "100px" }}>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              height={'100%'}
              spacing={4}
            >
              <Body />
              <Footer />
            </Stack>
          </Container>
        </Box>
      </ThemePaletteComponentsToggle>
    </LitaProvider>
  );
}

export default App;
