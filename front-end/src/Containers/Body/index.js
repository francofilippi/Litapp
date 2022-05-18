import React from 'react';
import LitaHeader from '../../Components/LitaHeader';
import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedProd from '../../Components/LitaSearchedProd';
import AdsenseBox from '../../Components/AdsenseBox';

// Lógica
import useLitaStates from '../../App/useLitaStates';

export default function Body() {

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
        loadingPricesOptions,
        setLoadingPricesOptions,
        pricesOptions,
    } = useLitaStates();

    return (
        <React.Fragment>
            <LitaHeader value={value} />
            <LitaSearch
                value={value}
            >
                <LitaSearchedInfo
                    value={value}
                />

                <LitaSearchedPrices
                    errorSearchOptions={errorSearchOptions}
                searchOptions={searchOptions}
                setLoadingPricesOptions={setLoadingPricesOptions}
            />
            {value &&
                <LitaSearchedProd
                    value={value}
                    pricesOptions={pricesOptions}
                    loadingPricesOptions={loadingPricesOptions}
                />}
            <AdsenseBox />
        </React.Fragment>
    )
}