import React, {useState} from 'react';

const InformacionBasicaValidation = ({informacionBasica}) => {
    //if (informacionBasica.nombre.trim().length === 0 || informacionBasica.apellido === "") {
        let err = {
            err: true,
            message: "Nombre y apellido son requeridos",
        }
    //}
    return err;
}

export default InformacionBasicaValidation;