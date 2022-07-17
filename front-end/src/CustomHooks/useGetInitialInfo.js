import React from "react";

const API_LITA_BASE = 'https://x3emzth7b7.execute-api.us-east-1.amazonaws.com/default'

export default function useGetInitialInfo() {

    const [searchOptions, setSearchOptions] = React.useState([]);
    const [storeOptions, setStoreOptions] = React.useState([]);

    // Effect para GetInitialInfo (LitApp)
    React.useEffect(() => {

        async function fetchInitialInfo() {
            //await new Promise((resolve) => setTimeout(resolve, 500));
            try {
                const initialInfo = await fetch(API_LITA_BASE + "getInitialInfo")
                    .then(response => response.json())
                    .then(data => data)

                setSearchOptions([...initialInfo[0].product])
                setStoreOptions([...initialInfo[1].stores])
            } catch (error) {
                setSearchOptions([{ productName: 'Error' }])
            }
        };
        fetchInitialInfo()

    }, []);

    return (
        {
            searchOptions,
            storeOptions,
        }
    );
}