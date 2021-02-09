import {DATOS_EMPLEADO, DATOS_EMPLEADO_EXITO, DATOS_EMPLEADO_ERROR} from "../types/types"

export default function CrearNuevoEmpleadoAction(empleado) {
    return () => {
        console.log("desde action:" , empleado)
    }
}