import React from 'react';

// Componentes OneProductSearch
import LitaOneProductSearch from '../../Components/LitaOneProductSearch';
import LitaOneProductContainer from '../../Components/LitaOneProductContainer';
import LitaOneProductInfo from '../../Components/LitaOneProductInfo';

// Componentes OneProduct Prices
import LitaOneProductPrices from '../../Components/LitaOneProductPrices';
import LoadingOneProductPrices from '../../Components/LitaOneProductPrices/LoadingOneProductPrices'
import ErrorOneProductPrices from '../../Components/LitaOneProductPrices/ErrorOneProductPrices'
import FullFilledOneProductPrices from '../../Components/LitaOneProductPrices/FullFilledOneProductPrices';

// Lógica
import useOneProductStates from './useOneProductStates';

export default function OneProductMode() {

    const {
        value,
        setValue,
        open,
        setOpen,
        oneProductOptions,
        loadingOneProductOptions,
        errorOneProductOptions,
        oneProductPrices,
        errorOneProductPrices,
        loadingOneProductPrices,
    } = useOneProductStates();

    return (
        <>
            <LitaOneProductSearch
                oneProductOptions={oneProductOptions}
                value={value}
                setValue={setValue}
                open={open}
                setOpen={setOpen}
                loadingOneProductOptions={loadingOneProductOptions}
                errorOneProductOptions={errorOneProductOptions}
            />
            {!!value &&
                <LitaOneProductContainer>

                    <LitaOneProductInfo
                        value={value} />

                    <LitaOneProductPrices
                        errorOneProductPrices={errorOneProductPrices}
                        loadingOneProductPrices={loadingOneProductPrices}
                        oneProductPrices={oneProductPrices}
                        onLoading={() => (<LoadingOneProductPrices />)}
                        onError={() => (<ErrorOneProductPrices />)}
                    >
                        {(item, index) => (
                            <FullFilledOneProductPrices
                                key={item.name}
                                index={index}
                                item={item.name}
                            />
                        )}
                    </LitaOneProductPrices>

                </LitaOneProductContainer>
            }
        </>
    )
}