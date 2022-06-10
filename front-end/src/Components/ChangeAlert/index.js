import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={() => toggleShow(false)}>Volver a cargar la info</button>
            </div>
        )
    } else {
        return null;
    }
}

// Envolvemos al componente ChangeAlert en nuestro HOC withStorageListener
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }