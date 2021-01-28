import React, {useState} from 'react'
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // esto lo puedo usar para enviar a la próxima pagina
        console.log({...informacionBasica, ...ubicacion})
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