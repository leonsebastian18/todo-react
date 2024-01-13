import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow}) {
    if (show) {
        return (
            <div>
                <p> hubo cambios?</p>
                <button
                    onClick={() => toggleShow(false)}
                > 
                    Volver a cargar la información</button>
            </div>
        );
            
    } else {
        return null;
    }
    
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };