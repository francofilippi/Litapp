import React from 'react';

import LitaHeader from '../../Components/LitaHeader';
import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchedInfo from '../../Components/LitaSearchedInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';
import AdsenseBox from '../../Components/AdsenseBox';

// Lógica
import useLitaStates from '../../App/useLitaStates';
import LitaError from '../../Components/LitaError';

export default function Body() {

    const {
        error,
        loading,
        loadingPricesOptions,
        errorPricesOptions,
        value,
        setValue,
        pricesOptions,
        errorSearchOptions,
    } = useLitaStates();

    return (
        <React.Fragment>

            <LitaHeader value={value} />

            <LitaSearch value={value} setValue={setValue} />

            <LitaSearchedContainer
                value={value}
            >
                <LitaSearchedInfo
                    value={value} />


                <LitaSearchedPrices
                    loadingPricesOptions={loadingPricesOptions}
                    errorPricesOptions={errorPricesOptions}
                    pricesOptions={pricesOptions}
                    onLoading={() => <LoadingSearchedPrices />}
                    onError={() => <LitaError />}
                >
                    {(item, index) => (
                        <FullFilledSearchedPrices
                            index={index}
                            item={item.name}
                        />
                    )}
                </LitaSearchedPrices>

            </LitaSearchedContainer>

            <AdsenseBox />

        </React.Fragment>
    )
}