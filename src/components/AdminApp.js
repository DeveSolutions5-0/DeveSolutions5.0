import { useState } from "react";

export default function AdminApp() {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <>
      <label>Hola</label>


      </>

      <form>
        <h1>useState - HOOKS</h1>

        <button type="submit" onClick={sumar}>
          Sumar
        </button>
        <button type="submit" onClick={restar}>
          Restar
        </button>

        <h1>{contador}</h1>
      </form>
    </>
  );
}
