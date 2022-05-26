import React from 'react';

import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaChanguitoInfo from '../../Components/LitaChanguitoInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import ErrorSearchedPrices from '../../Components/LitaSearchedPrices/ErrorSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';

// Lógica
import useLitaStates from './useLitaStates';

export default function ChanguitoMode() {

    const {
        errorPricesOptions,
        loadingPricesOptions,
        pricesOptions,
    } = useLitaStates();

    return (
        <>
            <LitaSearchedContainer>

                <LitaChanguitoInfo />
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