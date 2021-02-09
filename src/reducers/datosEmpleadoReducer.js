import {DATOS_EMPLEADO, DATOS_EMPLEADO_EXITO, DATOS_EMPLEADO_ERROR} from "../types/types"

const initialState = {
    datosEmpleado: {},
    datosEmpleados: [],
    error: false,
    loading: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}