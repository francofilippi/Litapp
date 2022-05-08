import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';
import LitaError from '../LitaError';
import { LitaContext } from '../LitaContext';

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

      <Paper variant='borderBlackElevatedPaper'>
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
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="100%"
                    alignItems="center"
                  >
                    <Typography variant='body1'>{option.name}</Typography>
                    <Paper variant='imgListPaper'>
                      <img
                        loading='lazy'
                        src={`https://rickandmortyapi.com/api/character/avatar/${option.id}.jpeg`}
                        style={{'height': '100%' }}
                        alt=""
                      />
                    </Paper>
                  </Stack>
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
