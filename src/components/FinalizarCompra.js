import "../styles/tablas.css";
import React, { useEffect, useState } from "react";
import "../styles/objetos.css";
import { Link } from "react-router-dom";

function FinalizarCompra() {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    fetch("compra.json")
      .then((response) => response.json())
      .then((datos) => {
        setAutos(datos);
      });
  }, []);

  return autos;
}

export default function ListaAutos() {
  const autos = FinalizarCompra();

  return (
    <div align="center">
      <h3>Finalizar Compra</h3>

      <div>
        <div>
          <table className="demTable">
            <thead>
              <tr>
                <th scope="col">Tu producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Referencia</th>
                <th scope="col">Valor</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {autos.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`}
                      alt={item.marca}
                      width="30px"
                    />
                  </td>
                  <td>{item.cantidad}</td>
                  <td>{item.producto}</td>
                  <td>{item.valor}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="cuerpoContenedor">
        <Link to="/ConfirmacionCompra" className="objBotonEditar">
          Finalizar Compra
        </Link>
        <Link to="/CarritoCompras" className="botonEliminar">
          Cancelar
        </Link>
      </div>
    </div>
  );
}
