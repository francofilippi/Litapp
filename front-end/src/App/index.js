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

      <Box className='main-container' height='100%' minHeight='100vh' paddingTop='70px' justifyContent='center' sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth='xl'>
          <Navbar setProductMode={setProductMode} />
          <Grid
            container
            direction='column'
            flexWrap='nowrap'
            alignItems="center"
            height='100%'
            spacing={3}
          >
            <Grid item xs={10.5}>
              <Stack alignItems='center' spacing={2}>
                <Body
                  productMode={productMode}
                  oneProductMode={() => <OneProductMode />}
                  changuitoMode={() => <ChanguitoMode />}
                />
              </Stack>
            </Grid>

            <Grid item xs={1}>

              <AdsenseBox />
            </Grid>

            <Grid item xs={.5} alignSelf='flex-end'>
              <Footer />
            </Grid>

          </Grid>
        </Container>
      </Box>

    </ThemePaletteComponentsToggle >
  );
}

export default App;
