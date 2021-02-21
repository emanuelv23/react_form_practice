import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Empleado from "./Empleado";
import { VerEmpleadosAction } from "../../../actions/empleadosAction";

const VerEmpleados = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const mostrarEmpleados = () => dispatch(VerEmpleadosAction());
    mostrarEmpleados();
  }, []);

  const empleados = useSelector((state) => state.empleados.empleados);
  console.log(empleados);

  return (
    <table>
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Nombre</th>
          <th>Provincia</th>
          <th>Pais</th>
        </tr>
      </thead>
      <tbody>
        {empleados.length === 0
          ? "no hay empleados"
          : empleados.map((empleado) => (
              <Empleado key={empleado.apellido} empleado={empleado} />
            ))}
      </tbody>
    </table>
  );
};

export default VerEmpleados;
