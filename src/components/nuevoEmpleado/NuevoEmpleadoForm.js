import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import InformacionBasica from "./InformacionBasica"
import Ubicacion from "./Ubicacion"
import {CrearEmpleadoAction} from "../../actions/empleadoAction"

const NuevoEmpleadoForm = () => {
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

    const crearEmpleado = (empleado) => dispatch(CrearEmpleadoAction(empleado))

    const handleSubmit = (e) => {
        e.preventDefault();

        crearEmpleado({...informacionBasica, ...provinciaNombre, ...ciudadNombre})
    }

    return (
        <form onSubmit={handleSubmit}>
            <InformacionBasica informacionBasica={informacionBasica} setInformacionBasica={setInformacionBasica} />
            <Ubicacion setProvinciaNombre={setProvinciaNombre} setCiudadNombre={setCiudadNombre}/>
            <button type="submit" >
                Crear
                {/*<Link to={"/mostrarEmpleados"}>
                    Crear
                </Link>*/}
            </button>
        </form>
    )
}

export default NuevoEmpleadoForm