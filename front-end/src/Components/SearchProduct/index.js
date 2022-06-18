import React from 'react';

// IMPORTS MUI
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Componentes
import SearchProductError from './SearchProductError';

export default function SearchProduct({
  multiple,
  limitTags,
  filterSelectedOptions,
  value,
  setValue,
  searchOptions,
}) {

  const [open, setOpen] = React.useState(false)
  const loadingSearchOptions = open && searchOptions.length === 0;

  return (
    <Autocomplete
      sx={{ width: '100%', maxWidth: '650px' }}
      multiple={multiple}
      limitTags={limitTags}
      filterSelectedOptions={filterSelectedOptions}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.productName === value.productName}
      getOptionLabel={(option) => option.productName}
      options={searchOptions}
      loadingText='Cargando..'
      renderOption={
        searchOptions.length === 1 ? () => <SearchProductError /> :
          (props, option) => (
            <ListItem
              variant='listItemSearchProduct'
              key={option.productName}
              {...props}>
              <Box maxHeight='150px' width='100%'>
                <Stack
                  direction="row"
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant='body2' sx={{ 'maxWidth': '280px' }}>{option.productName}</Typography>
                  <Paper variant='imgListPaper' sx={{ display: 'flex', width: '6rem', height: '6rem' }}>
                    <img
                      src={option.image}
                      style={{ 'aspectRatio': '1/1', 'borderRadius': '10%' }}
                      alt=""
                    />
                  </Paper>
                </Stack>
              </Box>
            </ ListItem>
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
  );
}
