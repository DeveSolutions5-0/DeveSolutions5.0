import { Fragment } from "react";
import IngresarProducto from "./components/IngresarProducto"
import menuApp from "./components/MenuApp";




function App() {
  return (
    <div className="container">
    <Fragment>

    <menuApp/>
    <IngresarProducto/>
    
  
    </Fragment>
    </div>
  );
}

export default App;