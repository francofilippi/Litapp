import React from 'react';

// Componentes
import LitaChanguitoSearch from '../../Components/LitaChanguitoSearch';
import LitaChanguitoContainer from '../../Components/LitaChanguitoContainer';
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
        setChanguito,
        changuito,
    } = useChanguitoStates();

    return (
        <>
            <LitaChanguitoSearch
                changuito={changuito}
                setChanguito={setChanguito}
                oneProductOptions={oneProductOptions}
                open={open}
                setOpen={setOpen}
                loadingOneProductOptions={loadingOneProductOptions}
                errorOneProductOptions={errorOneProductOptions}
            />
            <LitaChanguitoContainer />
        </>
    )
}