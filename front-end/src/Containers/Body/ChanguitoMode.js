import React from 'react';

// Componentes Changuito Search
import LitaOneProductContainer from '../../Components/LitaOneProductContainer';
import LitaChanguitoSearch from '../../Components/LitaChanguitoSearch';
import LitaChanguitoInfo from '../../Components/LitaChanguitoInfo';
import FullFillChanguito from '../../Components/LitaChanguitoInfo/FullFillChanguito';
import EmptyChanguito from '../../Components/LitaChanguitoInfo/EmptyChanguito';

// Componentes Changuito Prices
import LitaChanguitoPrices from '../../Components/LitaChanguitoPrices';
import ErrorChanguitoPrices from '../../Components/LitaChanguitoPrices/ErrorChanguitoPrices'
import LoadingChanguitoPrices from '../../Components/LitaChanguitoPrices/LoadingChanguitoPrices'
import FullFilledChanguitoPrices from '../../Components/LitaChanguitoPrices/FullFilledChanguitoPrices'
// Lógica
import useOneProductStates from './useOneProductStates';
import useChanguitoStates from './useChanguitoStates';

export default function ChanguitoMode() {

    const {
        open,
        setOpen,
        oneProductOptions,
        loadingOneProductOptions,
        errorOneProductOptions,
    } = useOneProductStates();

    const {
        changuito,
        setChanguito,
        changuitoPrices,
        errorChanguitoPrices,
        loadingChanguitoPrices,
        setLoadingChanguitoPrices,
    } = useChanguitoStates();

    return (
        <>
            <LitaChanguitoSearch
                oneProductOptions={oneProductOptions}
                changuito={changuito}
                setChanguito={setChanguito}
                open={open}
                setOpen={setOpen}
                loadingOneProductOptions={loadingOneProductOptions}
                errorOneProductOptions={errorOneProductOptions}
            />
            <LitaOneProductContainer>

                <LitaChanguitoInfo
                    changuito={changuito}
                    changuitoPrices={changuitoPrices}
                    setLoadingChanguitoPrices={setLoadingChanguitoPrices}
                    emptyChanguito={() => <EmptyChanguito />}
                    fullFilledChanguito={changuito.map((item) => (
                        <FullFillChanguito
                            changuito={changuito}
                            setChanguito={setChanguito}
                            key={item.name}
                            item={item}
                        />
                    ))}
                >
                </LitaChanguitoInfo>


                <LitaChanguitoPrices
                    changuitoPrices={changuitoPrices}
                    errorChanguitoPrices={errorChanguitoPrices}
                    loadingChanguitoPrices={loadingChanguitoPrices}
                    onLoading={() => (<LoadingChanguitoPrices />)}
                    onError={() => (<ErrorChanguitoPrices />)}
                >
                    {(item, index) => (
                        <FullFilledChanguitoPrices
                            key={index}
                            index={index}
                            item={item.name}
                        />
                    )}
                </LitaChanguitoPrices>

            </LitaOneProductContainer>
        </>
    )
}