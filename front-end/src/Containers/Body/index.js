import React from 'react';
import { LitaContext } from '../../Components/LitaContext';
import LitaHeader from '../../Components/LitaHeader';
import LitaSearch from '../../Components/LitaSearch';
import LitaSearchedProd from '../../Components/LitaSearchedProd';
import AdsenseBox from '../../Components/AdsenseBox';

export default function Body() {

    const {
        value
    } = React.useContext(LitaContext);

    return (
        <React.Fragment>
            <LitaHeader />
            <LitaSearch />
            {value && <LitaSearchedProd />}
            <AdsenseBox />
        </React.Fragment>
    )
}