import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import InformacionBasica from "./InformacionBasica"
import Ubicacion from "./Ubicacion"
import CrearNuevoEmpleadoAction from "../../actions/datosEmpleadoAction"

const DatosEmpleadoForm = () => {
    const [informacionBasica, setInformacionBasica] = useState({
        nombre: "",
        apellido: "",
    })
    const [provinciaNombre, setProvinciaNombre] = useState({
        provincia: "",
    })
    const [ciudadNombre, setCiudadNombre] = useState({
        ciudad: "",
    })

    const dispatch = useDispatch()

    const crearNuevoEmpleado = (empleado) => dispatch(CrearNuevoEmpleadoAction(empleado))

    const handleSubmit = (e) => {
        e.preventDefault();

        // esto lo puedo usar para enviar a la próxima pagina
        //console.log({...informacionBasica, ...provinciaNombre, ...ciudadNombre})

        crearNuevoEmpleado({...informacionBasica, ...provinciaNombre, ...ciudadNombre})
    }

    return (
        <form onSubmit={handleSubmit}>
            <InformacionBasica informacionBasica={informacionBasica} setInformacionBasica={setInformacionBasica} />
            <Ubicacion setProvinciaNombre={setProvinciaNombre} setCiudadNombre={setCiudadNombre}/>
            <button type="submit" />{/*
                <Link to={"/empleados"}>
                    Crear
                </Link>
            </button>*/}
        </form>
    )
}

export default DatosEmpleadoForm