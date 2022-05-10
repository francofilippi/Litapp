import React, { useContext } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import LitaError from '../LitaError';
import { LitaContext } from '../LitaContext';
import { Box } from '@mui/system';

export default function LitaSearch() {

  const {
    value,
    setValue,
    inputValue,
    setInputValue,
    open,
    setOpen,
    loadingSearchOptions,
    errorSearchOptions,
    searchOptions,
    setLoadingPricesOptions,
  } = useContext(LitaContext)

  return (
    <React.Fragment>

      <Paper variant='borderBlackElevatedPaper' sx={{ width: '100%', maxWidth: '650px' }}>
        <div>{`value: ${value !== null ? value.id : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <Autocomplete
          onChange={(event, newValue) => {
            setValue(newValue)
            setLoadingPricesOptions(true)
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
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
            (errorSearchOptions) ?
              () => { <LitaError>ERROR</LitaError> }
              :
              (props, option) => (
                <ListItem
                  variant='listItemLitaSearch'
                  {...props}>
                  <Box sx={{ width: '100%' }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      width="100%"
                      alignItems="center"
                    >
                      <Typography variant='body1'>{option.name}</Typography>
                      <Paper variant='imgListPaper' sx={{ height: '9rem' }}>
                        <img
                          loading='lazy'
                          src={`https://rickandmortyapi.com/api/character/avatar/${option.id}.jpeg`}
                          style={{ 'height': '100%' }}
                          alt=""
                        />
                      </Paper>
                    </Stack>
                    <Divider sx={{ width: '100%', height: '5px' }} />
                  </Box>
                </ListItem>
              )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder='Busca un producto de super..'
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loadingSearchOptions ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Paper>
    </React.Fragment>
  );
}
