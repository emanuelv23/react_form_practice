import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {NuevoEmpleadoAction} from "../../../actions/empleadosAction"
import InformacionBasica from "./InformacionBasica"
import Contacto from "../../contacto/Contacto";
import Ubicacion from "./Ubicacion"

const EmpleadosNuevo = () => {
    const [informacionBasica, setInformacionBasica] = useState({
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
    })
    const [contacto, setContacto] = useState({
        movil: "",
        email: "",
    })
    const [domicilio, setDomicilio] = useState({
        calle: "",
        numero: "",
    })
    const [provinciaNombre, setProvinciaNombre] = useState({
        provincia: "",
    })
    const [ciudadNombre, setCiudadNombre] = useState({
        ciudad: "",
    })

    const [err, setErr] = useState({
        err: false,
        message: ""
    });

    const dispatch = useDispatch()

    const crearEmpleado = (empleado) => dispatch(NuevoEmpleadoAction(empleado))

    const handleSubmit = (e) => {
        e.preventDefault();

        setErr({
            err: false,
            message: ""
        })

        if (informacionBasica.nombre.trim().length === 0 || informacionBasica.apellido.trim().length === 0) {
            setErr({
                err: true,
                message: "Nombre y apellido son requeridos",
            })
        }

        crearEmpleado({...informacionBasica, ...contacto, ...domicilio, ...provinciaNombre, ...ciudadNombre})
    }

    return (
        <form onSubmit={handleSubmit}>
            <InformacionBasica informacionBasica={informacionBasica} setInformacionBasica={setInformacionBasica} />
            <Contacto contacto={contacto} setContacto={setContacto}/>
            <Ubicacion setProvinciaNombre={setProvinciaNombre} setCiudadNombre={setCiudadNombre} domicilio={domicilio} setDomicilio={setDomicilio} />
            <button type="submit" >Crear</button>
            {err.err ? <p>{err.message}</p> : null}
        </form>
    )
}

export default EmpleadosNuevo