import React, {useState, useEffect} from 'react'
import InformacionBasica from "./InformacionBasica"
import Ubicacion from "./Ubicacion"

const DatosEmpleadoForm = () => {
    const [informacionBasica, setInformacionBasica] = useState({
        nombre: "",
        apellido: "",
    })
    const [ubicacion, setUbicacion] = useState({
        ciudad: "",
        provincia: "",
    })
    const [datosEmpleado, setDatosEmpleado] = useState({
        nombre: "",
        apellido: "",
        ciudad: "",
        provincia: ""
    });

    useEffect(() => {
        setDatosEmpleado({
            nombre: informacionBasica?.nombre,
            apellido: informacionBasica?.apellido,
            ciudad: ubicacion?.ciudad,
            provincia: ubicacion?.provincia,
        });
    }, [informacionBasica, ubicacion])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(datosEmpleado)
    }

   return (
        <form onSubmit={handleSubmit}>
            <InformacionBasica informacionBasica={informacionBasica} setInformacionBasica={setInformacionBasica} />
            <Ubicacion ubicacion={ubicacion} setUbicacion={setUbicacion} />
            <button type="submit">Crear</button>
        </form>
    )
}

export default DatosEmpleadoForm