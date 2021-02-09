import {combineReducers} from "redux";
import datosEmpleadoReducer from "./datosEmpleadoReducer";

export default combineReducers({
    datosEmpleado: datosEmpleadoReducer,
})