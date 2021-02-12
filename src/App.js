import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import NuevoEmpleadoForm from "./components/nuevoEmpleado/NuevoEmpleadoForm";
import MostrarEmpleados from "./components/mostrarEmpleados/MostrarEmpleados";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          {/*<Route exact path="/" component={Home} />*/}
          <Route exact path="/empleados/nuevo" component={NuevoEmpleadoForm} />
          <Route exact path="/empleados/mostrar" component={MostrarEmpleados} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
