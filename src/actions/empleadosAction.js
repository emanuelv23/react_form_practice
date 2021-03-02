import {
  NUEVO_EMPLEADO,
  NUEVO_EMPLEADO_EXITO,
  NUEVO_EMPLEADO_ERROR,
  VER_EMPLEADOS,
  VER_EMPLEADOS_EXITO,
  VER_EMPLEADOS_ERROR,
} from "../types";
import {db} from "../firebase"

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

export function NuevoEmpleadoAction(nuevo) {
  return (dispatch) => {
    dispatch(nuevoEmpleado())

    db
        .collection("empleados")
        .add(nuevo)
        .then((docRef) => {
          dispatch(nuevoEmpleadoExito())
        })
        .catch((error) => {
          dispatch(nuevoEmpleadoError())
        })
  };
}

const verEmpleados = () => ({
  type: VER_EMPLEADOS,
  payload: true,
});

const verEmpleadosExito = (empleados) => {
  console.log("verEmpleadosExito", empleados)
  return ({
    type: VER_EMPLEADOS_EXITO,
    payload: empleados,
  })
}

const verEmpleadosError = () => ({
  type: VER_EMPLEADOS_ERROR,
});

export function VerEmpleadosAction() {
  return (dispatch) => {
    dispatch(verEmpleados());

    db
        .collection("empleados")
        .get()
        .then(docs => {

          if (docs.empty) {
            console.log("no hay documentos en esta colección")
          } else {
            let empleados = []
            docs.forEach(doc => {
              empleados.push(doc.data())
            })
            dispatch(verEmpleadosExito(empleados))
          }
        })
        .catch(error => {
          dispatch(verEmpleadosError())
          console.log("Error al traer documentos", error)
        })
  };
}
