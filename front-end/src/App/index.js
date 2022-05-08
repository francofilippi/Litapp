import React from 'react';
import LitaProvider from '../Components/LitaContext';
import { Container, Stack, ThemeProvider } from '@mui/material';

// Containers
import Navbar from '../Containers/Navbar';
import Body from '../Containers/Body';
import Footer from '../Containers/Footer';

// CSS
import litaTheme from './litaTheme'
import './App.css';

function App() {

  return (
    <LitaProvider>
      <ThemeProvider theme={litaTheme}>
        <div className='backgroundLita'>
          <div className='main-container'>
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
          </div>
        </div>
      </ThemeProvider>
    </LitaProvider>
  );
}

export default App;
