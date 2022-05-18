import React from 'react';

import LitaHeader from '../../Components/LitaHeader';
import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedContainer from '../../Components/LitaSearchedContainer';
import LitaSearchedInfo from '../../Components/LitaSearchedInfo';
import LitaSearchedPrices from '../../Components/LitaSearchedPrices';
import AdsenseBox from '../../Components/AdsenseBox';

// Lógica
import useLitaStates from '../../App/useLitaStates';
import LitaError from '../../Components/LitaError';

export default function Body() {

    const {
        error,
        loading,
        value,
        pricesOptions,
        errorSearchOptions,
        setValue,
    } = useLitaStates();

    return (
        <React.Fragment>
            <LitaHeader value={value} />
            <LitaSearch value={value} setValue={setValue} />
            {value &&
                <LitaSearchedContainer>
                    <LitaSearchedInfo
                        value={value}
                    />

                    <LitaSearchedPrices
                        pricesOptions={pricesOptions}
                    />
                </LitaSearchedContainer>
            }
            <AdsenseBox />
        </React.Fragment>
    )
}