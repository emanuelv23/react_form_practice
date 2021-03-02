import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VerEmpleadosAction } from "../../../actions/empleadosAction";
import Empleado from "./Empleado";

const EmpleadosVer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const mostrarEmpleados = () => dispatch(VerEmpleadosAction());
    mostrarEmpleados();
  }, []);

  const empleados = useSelector((state) => state.empleados.empleados);

  return (
      <Fragment>
          <h1>Empleados</h1>
            <table>
                <thead>
                    <tr>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Provincia</th>
                    <th>Pais</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado) => (
                    <Empleado key={empleado.key} empleado={empleado} />
                    ))}
                </tbody>
            </table>
      </Fragment>
  );
};

export default EmpleadosVer;
