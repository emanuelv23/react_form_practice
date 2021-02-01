import DatosEmpleadoForm from "./components/datosEmpleado/DatosEmpleadoForm";
import TestUno from "./components/testUno/TestUno";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={DatosEmpleadoForm} />
          <Route exaxct path="/testuno" component={TestUno} />
        </Switch>
      </Router>
  );
}

export default App;
