import { Fragment } from "react";
import IngresarProducto from "./components/IngresarProducto";
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
    </div>
  );
}

export default App;
