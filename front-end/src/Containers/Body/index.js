import React from 'react';

import LitaHeader from '../../Components/LitaHeader';
import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchedInfo from '../../Components/LitaSearchedInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import ErrorSearchedPrices from '../../Components/LitaSearchedPrices/ErrorSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';
import LitaChanguitoBox from '../../Components/LitaChanguitoBox';

// Lógica
import useLitaStates from '../../App/useLitaStates';

export default function Body({ changuito }) {

    const {
        value,
        setValue,
        errorPricesOptions,
        loadingPricesOptions,
        pricesOptions,
    } = useLitaStates();

    return (
        <>
            <LitaHeader value={value} />

            {!changuito ? (
                <>
                    <LitaSearch value={value} setValue={setValue} />
                    {!!value &&
                        <LitaSearchedContainer                    >

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
            ) : (
                <>
                    <LitaSearchedContainer
                        changuito={changuito}
                    >

                        <LitaChanguitoBox
                            changuito={changuito} />

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
                </>
            )}
        </>
    )
}