import React from 'react';

import LitaHeader from '../../Components/LitaHeader';
import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchedInfo from '../../Components/LitaSearchedInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import ErrorSearchedPrices from '../../Components/LitaSearchedPrices/ErrorSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';
import AdsenseBox from '../../Components/AdsenseBox';

// Lógica
import useLitaStates from '../../App/useLitaStates';

export default function Body() {

    const {
        value,
        setValue,
        errorPricesOptions,
        loadingPricesOptions,
        pricesOptions,
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

            <AdsenseBox />

        </React.Fragment>
    )
}