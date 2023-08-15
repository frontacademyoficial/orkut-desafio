import { Link } from "react-router-dom";

import { Logo } from "../Logo/Logo";
import "./styles.css";

export function Menu() {
  return (
    <div className="menu-padding">
      <div className="container">
        <div className="content-menu">
          <div className="menu-left">
            <a href="/">
              <Logo />
            </a>

            <a href="#"> Inicio </a>
            <Link to="/perfil" className="fonte-perfil">
              Perfil{" "}
            </Link>
            <a href="/teste"> Comunidades </a>
            <a> Jogos </a>
          </div>

          <div className="pesquisa">
            <div className="menu-pesquisa">
              <img alt="search" src="imagens-orkut/MagnifyingGlass.png" />
              <input type="Pesquisa" placeholder="Pesquisar no orkut" />
            </div>
          </div>

          <div className="menu-rigth">
            <img src="imagens-orkut/iuricode 1.png" />
            <button>Flavio Almeida</button>
            <button>
              <img src="imagens-orkut/CaretDown.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
