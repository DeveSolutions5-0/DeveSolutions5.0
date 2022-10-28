import { useState } from "react";


export default function AdminApp() {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <div class="contenedor">
    <>
      <h2>useState - HOOKS</h2>
     
      <nav>
        <button class="button" onClick={sumar}>Sumar</button>
        <button class="button" onClick={restar}>Restar</button>
      </nav>
      
      <h3>{contador}</h3>
    </>
    
    </div>
  );
  
}
