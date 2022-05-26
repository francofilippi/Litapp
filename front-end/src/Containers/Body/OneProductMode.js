import React from 'react';

import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchedInfo from '../../Components/LitaSearchedInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import ErrorSearchedPrices from '../../Components/LitaSearchedPrices/ErrorSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';

// Lógica
import useLitaStates from './useLitaStates';

export default function OneProductMode() {

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
            <LitaSearch
                searchOptions={searchOptions}
                value={value}
                setValue={setValue}
                open={open}
                setOpen={setOpen}
                loadingSearchOptions={loadingSearchOptions}
                errorSearchOptions={errorSearchOptions}
            />
            {!!value &&
                <LitaSearchedContainer>

                    <LitaSearchedInfo
                        value={value} />

                    <LitaSearchedPrices
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
                    </LitaSearchedPrices>

                </LitaSearchedContainer>
            }
        </>
    )
}