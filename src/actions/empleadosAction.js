import {
  NUEVO_EMPLEADO,
  NUEVO_EMPLEADO_EXITO,
  NUEVO_EMPLEADO_ERROR,
  VER_EMPLEADOS,
  VER_EMPLEADOS_EXITO,
  VER_EMPLEADOS_ERROR,
  EMPLEADOS_ELIMINAR,
  EMPLEADOS_ELIMINAR_EXITO,
  EMPLEADOS_ELIMINAR_ERROR
} from "../types";
import {colecciones, db} from "../firebase"

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
  const empleados = []

  return (dispatch) => {
    dispatch(verEmpleados());

    db
        .collection("empleados")
        .get()
        .then(docs => {

          if (docs.empty) {
            console.log("no hay documentos en esta colección")
          } else {
            docs.forEach(doc => {
              const {
                apellido,
                calle,
                ciudad,
                email,
                fechaNacimiento,
                movil,
                nombre,
                numero,
                provincia,
                foo} = doc.data()
              empleados.push({
                key: doc.id,
                apellido: apellido,
                calle: calle,
                ciudad: ciudad,
                email: email,
                fechaNacimiento: fechaNacimiento,
                movil: movil,
                nombre: nombre,
                numero: numero,
                provincia: provincia,
                foo: foo
              })
            })
            console.log("empleadosAction: ", empleados)
            dispatch(verEmpleadosExito(empleados))
          }
        })
        .catch(error => {
          dispatch(verEmpleadosError())
          console.log("Error al traer documentos", error)
        })
  };
}

const empleadosEliminar = () => ({
  type: EMPLEADOS_ELIMINAR
})

const empleadosEliminarExito = (empleado) => ({
  type: EMPLEADOS_ELIMINAR_EXITO,
  payload: empleado
})

const empleadosEliminarError = (empleado) => ({
  type: EMPLEADOS_ELIMINAR_ERROR,
  payload: empleado
})

export function EmpleadosEliminarAction(empleado) {
  return (dispatch) => {
    dispatch(empleadosEliminar())

    db
        .collection(colecciones.empleados)
        .doc(empleado)
        .delete()
        .then(() => {
          dispatch(empleadosEliminarExito())
        })
        .catch(error => {
          console.log("error al eliminar empleado: ", error)
          dispatch(empleadosEliminarError())
        })
  };
}