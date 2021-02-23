import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import EmpleadosNuevo from "./components/empleados/nuevo/EmpleadosNuevo";
import EmpleadosVer from "./components/empleados/ver/EmpleadosVer";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          {/*<Route exact path="/" component={Home} />*/}
          <Route exact path="/empleados/nuevo" component={EmpleadosNuevo} />
          <Route exact path="/empleados/ver" component={EmpleadosVer} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
