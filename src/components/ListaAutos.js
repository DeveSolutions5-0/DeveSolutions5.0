import React, { useEffect, useState } from "react"

function useAutos() {

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

	const autos = useAutos()

	return (

		<div align="center">
      
	      <h4>Lista de Autos</h4>
	        
	      <div >

	        <div>

	          <table>
	            <thead>
	              <tr>
	                <th scope="col">ID</th>
	                <th scope="col">Marca</th>
	                <th scope="col">Stock</th>
	                <th scope="col">Precio</th>
	                <th scope="col">Imagen</th>
	              </tr>
	            </thead> 
	            <tbody>

	            {autos.map(item => (

	              <tr key={item.id}>
	                <td>{item.id}</td>
	                <td>{item.marca}</td>
	                <td>{item.stock}</td>
	                <td>{item.precio}</td>
	                <td><img src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`} alt={item.nombre} width="30px" className="img-fluid"/></td>
	              </tr>

	            ))}

	            </tbody>

	          </table>

	        </div>

	      </div>


        
    	</div>

	)

}