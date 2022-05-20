import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Provider para theme
import ThemePaletteComponentsToggle from './litaTheme';

// Containers
import Navbar from '../Containers/Navbar';
import Body from '../Containers/Body';
import Footer from '../Containers/Footer';
import AdsenseBox from '../Components/AdsenseBox';

// CSS
import './App.css';

function App() {

  return (
    <ThemePaletteComponentsToggle>

      <Navbar />

      <Box className='main-container' sx={{ backgroundColor: 'background.default' }}>

        <Grid
          container
          direction='column'
          flexWrap='nowrap'
          justifyContent='center'
          alignItems="center"
          minHeight='100vh'
        >
          <Grid item xs={10}>
            <Container maxWidth="xl" sx={{ paddingTop: '80px' }}>
              <Body />
            </Container>
          </Grid>

          <Grid item xs={1.5}>
            <Container maxWidth="xl">
              <AdsenseBox />
            </Container>
          </Grid>

          <Grid item xs={.5} alignSelf='flex-end'>
            <Footer />
          </Grid>

        </Grid>

      </Box>

    </ThemePaletteComponentsToggle >
  );
}

export default App;
