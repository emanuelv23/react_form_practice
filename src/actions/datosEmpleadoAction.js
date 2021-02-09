import {NUEVO_EMPLEADO, NUEVO_EMPLEADO_EXITO, NUEVO_EMPLEADO_ERROR} from "../types/types"

export default function CrearNuevoEmpleadoAction(empleado) {
    return (dispatch) => {
        dispatch(agregarProducto())
    }
}