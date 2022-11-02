
import IngresarProducto  from "./components/IngresarProducto";
import ListaAutos from "./components/ListaAutos";
import { Routes, Route, } from "react-router-dom";
import MenuApp from "./components/MenuApp";
import { Fragment } from "react";

function App() {
  return (
    <div>
     <Fragment>
        <MenuApp />
      </Fragment>
      <div className="container">
      <Routes>
  
        <Route path="/" element={<IngresarProducto/>} />
        <Route path="/ListaAutos" element={<ListaAutos/>} />
        
      </Routes>
      </div>

    </div>
  );
}

export default App



