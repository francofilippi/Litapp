import React from 'react';

import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchChanguito from '../../Components/LitaSearch';
import LitaChanguitoInfo from '../../Components/LitaChanguitoInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import ErrorSearchedPrices from '../../Components/LitaSearchedPrices/ErrorSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';

// Lógica
import useLitaStates from './useLitaStates';

export default function ChanguitoMode() {

    const {
        value,
        setValue,
        open,
        setOpen,
        searchOptions,
        loadingSearchOptions,
        errorSearchOptions,
        errorPricesOptions,
        loadingPricesOptions,
        pricesOptions,
    } = useLitaStates();

    return (
        <>
            <LitaSearchedContainer>
                <LitaSearchChanguito
                    searchOptions={searchOptions}
                    value={value}
                    setValue={setValue}
                    open={open}
                    setOpen={setOpen}
                    loadingSearchOptions={loadingSearchOptions}
                    errorSearchOptions={errorSearchOptions}
                />
                <LitaChanguitoInfo
                />
                {/* <LitaSearchedPrices
                    errorPricesOptions={errorPricesOptions}
                    loadingPricesOptions={loadingPricesOptions}
                    pricesOptions={pricesOptions}
                    onLoading={() => (<LoadingSearchedPrices />)}
                    onError={() => (<ErrorSearchedPrices />)}
                >
                    {(item, index) => (
                        <FullFilledSearchedPrices
                            key={index}
                            index={index}
                            item={item.name}
                        />
                    )}
                </LitaSearchedPrices> */}

            </LitaSearchedContainer>
        </>
    )
}