import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// Provider para theme
import ThemePaletteComponentsToggle from './litaTheme';

// Containers
import Navbar from '../Containers/Navbar';
import Body from '../Containers/Body';
import Footer from '../Containers/Footer';
import AdsenseBox from '../Components/AdsenseBox';
import ChanguitoMode from '../Containers/Body/ChanguitoMode';
import OneProductMode from '../Containers/Body/OneProductMode';

// CSS
import './App.css';

function App() {

  // Estado de MODO DE PRODUCTO
  const [productMode, setProductMode] = React.useState('OneProduct');

  return (
    <ThemePaletteComponentsToggle>

      <Navbar setProductMode={setProductMode} />

      <Box className='main-container' sx={{ backgroundColor: 'background.default' }}>

        <Grid
          container
          direction='column'
          flexWrap='nowrap'
          justifyContent='center'
          alignItems="center"
          minHeight='100vh'
          spacing={5}
        >
          <Grid item xs={10}>
            <Container maxWidth="xl" sx={{ paddingTop: '80px' }} >
              <Stack spacing={4}>
                <Body
                  productMode={productMode}
                  oneProductMode={() => <OneProductMode />}
                  changuitoMode={() => <ChanguitoMode />}
                />
              </Stack>
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
