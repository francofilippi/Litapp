import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// Provider para lógica
import LitaProvider from '../Components/LitaContext';

// Provider para theme
import ToggleColorMode from './litaTheme';

// Containers
import Navbar from '../Containers/Navbar';
import Body from '../Containers/Body';
import Footer from '../Containers/Footer';

// CSS
import './App.css';

function App() {

  return (
    <LitaProvider>
      <ToggleColorMode>
        <Container variant='backgroundContainer' maxWidth="xxl">
          <Box className='main-container' sx={{backgroundColor: 'background.default'}}>
            <Container maxWidth="xl">
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
              >
                <Navbar />
                <Body />
                <Footer />
              </Stack>
            </Container>
          </Box>
        </Container>
      </ToggleColorMode>
    </LitaProvider>
  );
}

export default App;
