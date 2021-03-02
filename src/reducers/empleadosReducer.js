import {
  NUEVO_EMPLEADO,
  NUEVO_EMPLEADO_EXITO,
  NUEVO_EMPLEADO_ERROR,
  VER_EMPLEADOS,
  VER_EMPLEADOS_EXITO,
  VER_EMPLEADOS_ERROR,
} from "../types";

const initialState = {
  empleado: {},
  empleados: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
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
    case NUEVO_EMPLEADO_ERROR:
      return {
        error: true,
      }
    case VER_EMPLEADOS:
      return {
        ...state,
        loading: true,
      };
    case VER_EMPLEADOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        empleados: action.payload,
      };
    default:
      return state;
  }
}
