import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import InformacionBasica from "./InformacionBasica"
import Ubicacion from "./Ubicacion"
import {NuevoEmpleadoAction} from "../../../actions/empleadosAction"
import Contacto from "./Contacto";

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
    const [provinciaNombre, setProvinciaNombre] = useState({
        provincia: "",
    })
    const [ciudadNombre, setCiudadNombre] = useState({
        ciudad: "",
    })

    const [domicilio, setDomicilio] = useState({
        calle: "",
        numero: "",
    })

    const dispatch = useDispatch()

    const crearEmpleado = (empleado) => dispatch(NuevoEmpleadoAction(empleado))

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({...informacionBasica, ...contacto, ...domicilio, ...provinciaNombre, ...ciudadNombre})
        crearEmpleado({...informacionBasica, ...contacto, ...domicilio, ...provinciaNombre, ...ciudadNombre})
    }

    return (
        <form onSubmit={handleSubmit}>
            <InformacionBasica informacionBasica={informacionBasica} setInformacionBasica={setInformacionBasica} />
            <Contacto contacto={contacto} setContacto={setContacto}/>
            <Ubicacion setProvinciaNombre={setProvinciaNombre} setCiudadNombre={setCiudadNombre} domicilio={domicilio} setDomicilio={setDomicilio} />
            <button type="submit" >Crear</button>
        </form>
    )
}

export default EmpleadosNuevo