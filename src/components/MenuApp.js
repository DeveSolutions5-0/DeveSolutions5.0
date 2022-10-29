import "../styles/menu.css"


export default function MenuApp() {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });
      burger.classList.toggle("toggle");
    });
    //
  };

  navSlide();

  return (
    <nav>
      <div class="logo">
        <h4>Navbar</h4>
      </div>
      <ul class="nav-links">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/">About</a>
        <a href="http://localhost:3000/">Contact</a>
        <a href="http://localhost:3000/">Blog</a>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
};
