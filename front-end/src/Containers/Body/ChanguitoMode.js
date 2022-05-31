import React from 'react';

import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchChanguito from '../../Components/LitaSearch/LitaSearchChanguito';
import LitaChanguitoInfo from '../../Components/LitaChanguitoInfo';
import FullFillChanguito from '../../Components/LitaChanguitoInfo/FullFillChanguito';
import EmptyChanguito from '../../Components/LitaChanguitoInfo/EmptyChanguito';

// Lógica
import useLitaStates from './useLitaStates';
import useChanguitoStates from './useChanguitoStates';

export default function ChanguitoMode() {

    const {
        open,
        setOpen,
        searchOptions,
        loadingSearchOptions,
        errorSearchOptions,
    } = useLitaStates();

    const {
        chango,
        setChango,
    } = useChanguitoStates();

    return (
        <>
            <LitaSearchChanguito
                searchOptions={searchOptions}
                setChango={setChango}
                open={open}
                setOpen={setOpen}
                loadingSearchOptions={loadingSearchOptions}
                errorSearchOptions={errorSearchOptions}
            />
            <LitaSearchedContainer>

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