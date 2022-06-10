import React from "react";

/* Creamos un HOC : High Order Component 
    que devuelve un componente de react, 
    que por dentro tiene un estado donde vamos 
    a guardar si hubo cambios en nuestra app
    y un actualizador de ese estado.
    Estos estados se los estamos enviando a nuestro WrappedComponent
    a través de las props show y toggleShow.
*/
function withStorageListener(WrappedComponent) {

    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)
        window.addEventListener('storage', (change) => {
            if (change.key === 'CHANGUITO_V1') {
                console.log('hubo cambios en CHANGUITO_V1')
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }
        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />)
    }
}

export { withStorageListener }
