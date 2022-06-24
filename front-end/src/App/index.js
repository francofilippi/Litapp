import React from 'react';

// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Provider para theme
import ThemePaletteComponentsToggle from './litaTheme';

// Containers
import Navbar from '../Containers/Navbar';
import Header from '../Containers/Header';
import Body from '../Containers/Body';
import Footer from '../Containers/Footer';
import ChanguitoMode from '../Containers/Body/ChanguitoMode';
import OneProductMode from '../Containers/Body/OneProductMode';

// Custom Hooks
import useGetInitialInfo from '../CustomHooks//useGetInitialInfo';
import useLogin from '../CustomHooks/useLogin';

// CSS
import './App.css';

function App() {

  // Estado de MODO DE PRODUCTO
  const [productMode, setProductMode] = React.useState('OneProduct');

  const { token, saveToken } = useLogin();

  const {
    searchOptions,
    storeOptions
  } = useGetInitialInfo();

  return (
    <ThemePaletteComponentsToggle>

      <Box className='main-container' height='100%' minHeight='100vh' sx={{ backgroundColor: 'background.default' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', mt: '80px' }}>
          <Navbar
            setProductMode={setProductMode}
            token={token}
            saveToken={saveToken}
          />

          <Grid
            container
            direction='column'
            flexWrap='nowrap'
            alignItems='center'
            spacing={2}
          >

            <Grid item xs>
              <Header productMode={productMode} />
            </Grid>

            <Grid container direction='column' item xs={10.5} alignItems='center' rowGap={2} >
              <Body
                productMode={productMode}
                oneProductMode={() => <OneProductMode searchOptions={searchOptions} storeOptions={storeOptions} />}
                changuitoMode={() => <ChanguitoMode searchOptions={searchOptions} storeOptions={storeOptions} />}
              />
            </Grid>

            <Grid item xs alignSelf='flex-end'>
              <Footer />
            </Grid>

          </Grid>
        </Container>
      </Box>

    </ThemePaletteComponentsToggle >
  );
}

export default App;
