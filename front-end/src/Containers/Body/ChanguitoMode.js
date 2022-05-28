import React from 'react';

import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchChanguito from '../../Components/LitaSearch/LitaSearchChanguito';
import LitaChanguitoInfo from '../../Components/LitaChanguitoInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import LoadingSearchedPrices from '../../Components/LitaSearchedPrices/LoadingSearchedPrices'
import ErrorSearchedPrices from '../../Components/LitaSearchedPrices/ErrorSearchedPrices'
import FullFilledSearchedPrices from '../../Components/LitaSearchedPrices/FullFilledSearchedPrices';

// Lógica
import useLitaStates from './useLitaStates';

import FullFillChanguito from '../../Components/LitaChanguitoInfo/FullFillChanguito';
import EmptyChanguito from '../../Components/LitaChanguitoInfo/EmptyChanguito';

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


    const [chango, setChango] = React.useState([])

    return (
        <>
            <LitaSearchedContainer>
                <LitaSearchChanguito
                    searchOptions={searchOptions}
                    chango={chango}
                    setChango={setChango}
                    open={open}
                    setOpen={setOpen}
                    loadingSearchOptions={loadingSearchOptions}
                    errorSearchOptions={errorSearchOptions}
                />
                <LitaChanguitoInfo
                    chango={chango}
                    emptyChango={() => <EmptyChanguito />}
                    fullFilledChango={chango.map((item) => (
                        <FullFillChanguito
                            key={item.name}
                            item={item}
                        />
                    ))}
                >
                </LitaChanguitoInfo>
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