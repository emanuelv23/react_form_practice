import {
  NUEVO_EMPLEADO,
  NUEVO_EMPLEADO_EXITO,
  NUEVO_EMPLEADO_ERROR,
  MOSTRAR_EMPLEADOS,
  MOSTRAR_EMPLEADOS_EXITO,
  MOSTRAR_EMPLEADOS_ERROR,
} from "../types";

const initialState = {
  empleado: {},
  empleados: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  console.log("entra reducer");
  switch (action.type) {
    case NUEVO_EMPLEADO:
      return {
        ...state,
        loading: true,
      };
    case NUEVO_EMPLEADO_EXITO:
      return {
        ...state,
        empleados: [...state.empleados, action.payload],
      };
    case MOSTRAR_EMPLEADOS:
      return {
        ...state,
        loading: true,
      };
    case MOSTRAR_EMPLEADOS_EXITO:
      return {
        ...state,
        productos: state.productos,
      };
    default:
      return state;
  }
}
