import {
  NUEVO_EMPLEADO,
  NUEVO_EMPLEADO_EXITO,
  NUEVO_EMPLEADO_ERROR,
  VER_EMPLEADOS,
  VER_EMPLEADOS_EXITO,
  VER_EMPLEADOS_ERROR,
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

export function NuevoEmpleadoAction(empleado) {
  return (dispatch) => {
    dispatch(nuevoEmpleado());

    try {
      dispatch(nuevoEmpleadoExito(empleado));
    } catch (error) {
      dispatch(nuevoEmpleadoError());
    }
  };
}

const verEmpleados = () => ({
  type: VER_EMPLEADOS,
  payload: true,
});

const verEmpleadosExito = () => ({
  type: VER_EMPLEADOS_EXITO,
});

const verEmpleadosError = () => ({
  type: VER_EMPLEADOS_ERROR,
});

export function VerEmpleadosAction() {
  return (dispatch) => {
    dispatch(verEmpleados());

    try {
      dispatch(verEmpleadosExito());
    } catch (error) {
      dispatch(verEmpleadosError());
    }
  };
}
