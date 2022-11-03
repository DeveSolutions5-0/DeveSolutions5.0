import '../styles/tablas.css';
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function CarritoCompras() {

	const [autos, setAutos] = useState([])

	useEffect(() => {
		fetch("autos.json")
		.then(response => response.json())
		.then(datos => {
			setAutos(datos)
		})
	}, [])

	return autos
}

export default function ListaAutos() {

	const autos = CarritoCompras()

	return (

		<div align="center">
      
	      <h3>Carrito de compras</h3>
	        
	      <div >
	        <div>
	          <table className='demTable'>
	            <thead>
	              <tr>
	                <th scope="col">ID</th>
	                <th scope="col">Marca</th>
	                <th scope="col">Stock</th>
	                <th scope="col">Precio</th>
	                <th scope="col">Imagen</th>
                    <th scope="col">Comprar</th>
	              </tr>
	            </thead> 
	            <tbody>

	            {autos.map(item => (

	              <tr key={item.id}>
	                <td>{item.id}</td>
	                <td>{item.marca}</td>
	                <td>{item.stock}</td>
	                <td>{item.precio}</td>
	                <td><img src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`} alt={item.marca} width="30px" /></td>
                    <td><label><Link to="/FinalizarCompra">Agregar al Carrito</Link></label></td>

	              </tr>

	            ))}

	            </tbody>

	          </table>

	        </div>

	      </div>


        
    	</div>

	)

}