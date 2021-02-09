import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import DatosEmpleadoForm from "./components/datosEmpleadoForm/DatosEmpleadoForm";
import TestUno from "./components/testUno/TestUno";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
              {/*<Route exact path="/" component={Home} />*/}
              <Route exact path="/" component={DatosEmpleadoForm} />
              <Route exaxct path="/testuno" component={TestUno} />
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
