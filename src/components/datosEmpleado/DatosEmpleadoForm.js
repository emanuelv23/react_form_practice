import React, {useState} from 'react'
import InformacionBasica from "./InformacionBasica"
import Ubicacion from "./Ubicacion"

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // esto lo puedo usar para enviar a la próxima pagina
        console.log({...informacionBasica, ...provinciaNombre, ...ciudadNombre})
    }

    return (
        <form onSubmit={handleSubmit}>
            <InformacionBasica informacionBasica={informacionBasica} setInformacionBasica={setInformacionBasica} />
            <Ubicacion setProvinciaNombre={setProvinciaNombre} setCiudadNombre={setCiudadNombre}/>
            <button type="submit">Crear</button>
        </form>
    )
}

export default DatosEmpleadoForm