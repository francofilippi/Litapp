import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LitaError from '../LitaError';

export default function LitaSearch(
  {
    searchOptions,
    setValue,
    value,
    open,
    setOpen,
    loadingSearchOptions,
    errorSearchOptions,
  }
) {

  //const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <div>{`value: ${value !== null ? value.id : 'null'}`}</div>
      {/* <div>{`inputValue: '${inputValue}'`}</div> */}
      <Autocomplete
        sx={{ width: '100%', maxWidth: '650px' }}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   setInputValue(newInputValue);
        // }}
        id="asynchronous-demo"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={searchOptions}
        loading={loadingSearchOptions}
        loadingText='Cargando..'
        renderOption={
          errorSearchOptions ?
            (option) => (<ListItem key={option.id} variant='listItemError'><LitaError /></ListItem>)
            :
            (props, option) => (
              <ListItem
                variant='listItemLitaSearch'
                {...props}>
                <Box maxHeight='150px' width='100%'>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="100%"
                    alignItems="center"
                  >
                    <Typography variant='body1'>{option.name}</Typography>
                    <Paper variant='imgListPaper' sx={{ display: 'flex', width: '6rem' }}>
                      <img
                        loading='lazy'
                        src={`https://rickandmortyapi.com/api/character/avatar/${option.id}.jpeg`}
                        style={{ 'height': 'auto', 'maxWidth': '100%', 'borderRadius': 'inherit' }}
                        alt=""
                      />
                    </Paper>
                  </Stack>
                </Box>
              </ListItem>
            )
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Busca un producto de super..'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loadingSearchOptions ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </ >
  );
}
