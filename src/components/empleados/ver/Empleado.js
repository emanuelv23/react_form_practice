import React from "react";
import {useDispatch} from "react-redux";
import {EmpleadosEliminarAction} from "../../../actions/empleadosAction";

const Empleado = ({ empleado }) => {
    const {key, apellido, nombre, provincia, pais} = empleado;

    const dispatch = useDispatch()
    const empleadoEliminar = (key) => dispatch(EmpleadosEliminarAction(key))

    const handleClickEliminar = (key) => {
        empleadoEliminar(key)
    }

    return (
        <tr>
            <td>{apellido}</td>
            <td>{nombre}</td>
            <td>{provincia}</td>
            <td>{pais}</td>
            <td className="acciones">
                {/*<button type="button" className="btn btn-primary mr-2" onClick = {() => redireccionarEdicion(producto)}>
                    Editar
                </button>*/}
                <button type="button" className="btn btn-danger" onClick={ (e) => handleClickEliminar(key)}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Empleado;
