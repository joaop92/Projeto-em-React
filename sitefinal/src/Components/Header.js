import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/Header.css";
import foto from '../Assets/img/Avatar.png';

function Header() {
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
     <img scr={foto} alt="logo" title="forçadevontade" style={{
      width: '200px',
      height: '100px',
      objectFit: 'cover',
     }}/> 
     
    <h1>  </h1>
      <nav ref={navRef}>
        <ul>
          <li>
            <a href="sitefinal/src/Components/Main.js" target="_blank" rel="noopener noreferrer">Sobre</a>
          </li>
          <li>
            <a href="https://joaop92.github.io/Portfolio1/projetos.html"target="_blank" rel="noopener noreferrer"> Projetos</a>
          </li>
          <li>
            <a href=""target="_blank"rel="noopener noreferrer">Contato</a>
          </li>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </ul>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;