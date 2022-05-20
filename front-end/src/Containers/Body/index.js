import React from 'react';
import Box from '@mui/material/Box';

import LitaHeader from '../../Components/LitaHeader';
import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchedInfo from '../../Components/LitaSearchedInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import ErrorSearchedPrices from '../../Components/LitaSearchedPrices/ErrorSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';

// Lógica
import useLitaStates from '../../App/useLitaStates';
import { Stack } from '@mui/material';

export default function Body() {

    const {
        value,
        setValue,
        errorPricesOptions,
        loadingPricesOptions,
        pricesOptions,
    } = useLitaStates();

    return (
        <Stack spacing={2}>

            <LitaHeader value={value} />

            <LitaSearch value={value} setValue={setValue} />

            <LitaSearchedContainer
                value={value}
            >
                <LitaSearchedInfo
                    value={value} />

                <LitaSearchedPrices
                    errorPricesOptions={errorPricesOptions}
                    loadingPricesOptions={loadingPricesOptions}
                    pricesOptions={pricesOptions}
                    onLoading={() => <LoadingSearchedPrices />}
                    onError={() => <ErrorSearchedPrices />}
                >
                    {(item, index) => (
                        <FullFilledSearchedPrices
                            index={index}
                            item={item.name}
                        />
                    )}
                </LitaSearchedPrices>

            </LitaSearchedContainer>


        </Stack>
    )
}