
import IngresarProducto  from "./components/IngresarProducto";
import CarritoCompras  from "./components/CarritoCompras";
import MenuApp from "./components/MenuApp";
import ListaAutos from "./components/ListaAutos";
import FinalizarCompra from "./components/FinalizarCompra";
import ConfirmacionCompra from "./components/ConfirmacionCompra"
import { Routes, Route, } from "react-router-dom";
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
        <Route path="/CarritoCompras" element={<CarritoCompras/>} />
        <Route path="/FinalizarCompra" element={<FinalizarCompra/>} />
        <Route path="/ConfirmacionCompra" element={<ConfirmacionCompra/>} />
        
      </Routes>
      </div>

    </div>
  );
}

export default App



