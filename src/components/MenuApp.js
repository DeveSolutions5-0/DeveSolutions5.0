import "../styles/menu.css";
import { Link } from "react-router-dom";

export default function MenuApp() {
  return (
    <nav>
      <div class="logo">
        <img src="logoa.png" alt="logo" className="logo" />
      </div>
      <ul class="nav-links">
        <Link to="/">Autos</Link>
        <Link to="/ListaAutos">Ventas</Link>
        <Link to="/CarritoCompras">Carrito</Link>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
}
