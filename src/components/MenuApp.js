import "../styles/menu.css"



export default function MenuApp() {
 
  return (

    <nav>
      <div class="logo">
        <img src="logoa.png" alt='logo' className="logo"/>
      </div>
      <ul class="nav-links">
        <a href="https://www.google.com/?hl=es">Inicio</a>
        <a href="https://www.google.com/?hl=es">Autos</a>
        <a href="https://www.google.com/?hl=es">Ventas</a>
        <a href="https://www.google.com/?hl=es">Carrito</a>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
};
