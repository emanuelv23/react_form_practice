import React, {useState, useEffect} from 'react'
import InformacionBasica from "./InformacionBasica"
import Ubicacion from "./Ubicacion"

const DatosEmpleadoForm = (e) => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [provincia, setProvincia] = useState("")

    const [datosEmpleado, setDatosEmpleado] = useState({
        nombre: "",
        apellido: "",
        ciudad: "",
        provincia: ""
    });

    const guardarInformacionBasica = (informacionBasica) => {
        setNombre(informacionBasica.nombre)
        setApellido(informacionBasica.apellido)
    }

    const guardarUbicacion = (ubicacion) => {
        setCiudad(ubicacion.ciudad)
        setProvincia(ubicacion.provincia)
    }

    useEffect(() => {
        setDatosEmpleado({
            ...datosEmpleado,
            nombre: nombre,
            apellido: apellido,
        })
    }, [nombre, apellido]);

    useEffect(() => {
        setDatosEmpleado({
            ...datosEmpleado,
            ciudad: ciudad,
            provincia: provincia,
        })
    }, [ciudad, provincia])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(datosEmpleado)
    }

   return (
        <form onSubmit={handleSubmit}>
            <InformacionBasica informacionBasica={guardarInformacionBasica} />
            <Ubicacion ubicacion={guardarUbicacion}/>
            <button type="submit">Crear</button>
        </form>
    )
}

export default DatosEmpleadoForm