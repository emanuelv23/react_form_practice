import {
  NUEVO_EMPLEADO,
  NUEVO_EMPLEADO_EXITO,
  NUEVO_EMPLEADO_ERROR,
  MOSTRAR_EMPLEADOS,
  MOSTRAR_EMPLEADOS_EXITO,
  MOSTRAR_EMPLEADOS_ERROR,
} from "../types";

const nuevoEmpleado = () => ({
  type: NUEVO_EMPLEADO,
  payload: true,
});

const nuevoEmpleadoExito = (empleado) => ({
  type: NUEVO_EMPLEADO_EXITO,
  payload: empleado,
});

const nuevoEmpleadoError = () => ({
  type: NUEVO_EMPLEADO_ERROR,
});

export function CrearEmpleadoAction(empleado) {
  return (dispatch) => {
    dispatch(nuevoEmpleado());

    try {
      dispatch(nuevoEmpleadoExito(empleado));
    } catch (error) {
      dispatch(nuevoEmpleadoError());
    }
  };
}

const mostrarempleados = () => ({
  type: MOSTRAR_EMPLEADOS,
  payload: true,
});

const mostrarEmpleadosExito = () => ({
  type: MOSTRAR_EMPLEADOS_EXITO,
});

const mostrarEmpleadosError = () => ({
  type: MOSTRAR_EMPLEADOS_ERROR,
});

export function MostrarEmpleadosAction() {
  return (dispatch) => {
    dispatch(mostrarempleados());

    try {
      dispatch(mostrarEmpleadosExito());
    } catch (error) {
      dispatch(mostrarEmpleadosError());
    }
  };
}
