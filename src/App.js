import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import NuevoEmpleado from "./components/empleados/nuevoEmpleado/NuevoEmpleado";
import VerEmpleados from "./components/empleados/verEmpleados/VerEmpleados";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Header /> */}
        <Switch>
          {/*<Route exact path="/" component={Home} />*/}
          <Route exact path="/empleados/nuevo" component={NuevoEmpleado} />
          <Route exact path="/empleados/ver" component={VerEmpleados} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
