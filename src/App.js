import { Fragment } from "react";
import IngresarProducto from "./components/IngresarProducto";
import ListaAutos from "./components/ListaAutos";
import MenuApp from "./components/MenuApp";

function App() {
  return (
    <div>
      <Fragment>
        <MenuApp />
      </Fragment>
      <Fragment>
        <div className="container">
          <IngresarProducto />
        </div>
      </Fragment>
      <Fragment>
        <div className="container">
        <ListaAutos />
        </div>
      </Fragment>

    </div>
  );
}

export default App;
