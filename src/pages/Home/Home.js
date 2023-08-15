import "./styles/global-orkut.css";
import { Menu } from "../../components/Menu/Menu";
import { Like } from "../../components/Like/Like";
import Amigo1 from "./imagens-orkut/img1.png";
import Amigo2 from "./imagens-orkut/img2.png";
import Amigo3 from "./imagens-orkut/img3.png";
import Amigo4 from "./imagens-orkut/img4.png";
import Amigo5 from "./imagens-orkut/img5.png";
import Amigo6 from "./imagens-orkut/img6.png";
import Amigo7 from "./imagens-orkut/img7.png";
import Amigo8 from "./imagens-orkut/img8.png";
import Amigo9 from "./imagens-orkut/img9.png";
import { AmigoAvatar } from "../../components/AmigoAvatar/AmigoAvatar";

function Home() {
  return (
    <div className="all-content">
      <div className="container">
        <div className="content-orkut">
          <div className="orkut-left">
            <div className="left">
              <div className="border-user">
                <div className="user">
                  <img src="imagens-orkut/iuricode 2.png" />
                </div>
              </div>
              <div className="user-name">Flavio Almeida</div>
              <div className="status-nationality">Casado, Brasil</div>
            </div>
            <a className="left-bottom"> Editar meu perfil </a>
          </div>

          <div className="orkut-center">
            <h1 className="welcome">Boa tarde, Flavio Almeida</h1>
            <div className="comment">
              <p className="content-comment">
                Programar sem café é igual poeta sem poesia.
              </p>
            </div>
            <div className="avaliacao">
              <p>
                Fãs
                <a>
                  <img src="imagens-orkut/fas.png" />
                  85
                </a>
              </p>
              <p className="confiavel">
                Confiável
                <a>
                  <img src="imagens-orkut/confiavel.png" />
                  <img src="imagens-orkut/confiavel.png" />
                </a>
              </p>
              <p className="legal">
                Legal
                <Like />
              </p>
              <p className="sexy">
                Sexy
                <a>
                  <img src="imagens-orkut/sexy.png" />
                  <img src="imagens-orkut/sexy.png" />
                </a>
              </p>
            </div>

            <div className="profile">
              Relacionamento:
              <p>Casado</p>
            </div>
            <div className="profile">
              Aniversário:
              <p>31 de outubro</p>
            </div>
            <div className="profile">
              Idade:
              <p>29</p>
            </div>
            <div className="profile">
              Interesses no Orkut:
              <p>Solteiro</p>
            </div>
            <div className="profile">
              Quem sou eu:
              <p>Programador</p>
            </div>
            <div className="profile">
              Filhos:
              <p>Sim</p>
            </div>
            <div className="profile">
              Sexo:
              <p>Masculino</p>
            </div>
            <div className="profile">
              Fumo:
              <p>Não</p>
            </div>
            <div className="profile">
              Bebo:
              <p>Socialmente</p>
            </div>
            <div className="profile">
              Moro:
              <p>Indaiatuba</p>
            </div>
            <div className="profile">
              País:
              <p>Brasil</p>
            </div>
            <div className="profile">
              Cidade natal:
              <p>São Paulo</p>
            </div>
            <div className="profile-like">
              Musicas:
              <div className="border-like1">
                <p>Trap</p>
              </div>
              <div className="border-like2">
                <p>Rap</p>
              </div>
              <div className="border-like3">
                <p>Black</p>
              </div>
              <a className="see-all"> Ver todos </a>
            </div>
            <div className="profile-like">
              Filmes:
              <div className="border-like4">
                <p className="verificar">A rede social</p>
              </div>
              <div className="border-like5">
                <p className="verificar">Meu amigo tororo</p>
              </div>
              <a className="see-all"> Ver todos </a>
            </div>
          </div>

          <div className="orkut-rigth">
            <div className="right">
              <div>
                Amigos (248)
                <a className="see-all"> ver todos </a>
              </div>

              <div className="grid-friends">
                <AmigoAvatar image={Amigo1} nome="Fernando" />
                <AmigoAvatar image={Amigo2} nome="Ana" />
                <AmigoAvatar image={Amigo3} nome="Carlos" />
                <AmigoAvatar image={Amigo4} nome="Vitor" />
                <AmigoAvatar image={Amigo5} nome="Matheus" />
                <AmigoAvatar image={Amigo6} nome="Ramos" />
                <AmigoAvatar image={Amigo7} nome="Eiji" />
                <AmigoAvatar image={Amigo8} nome="Julia" />
                <AmigoAvatar image={Amigo9} nome="Carol" />
              </div>
            </div>

            <div className="right-bottom">
              Comunidades (42)
              <a className="see-all"> Ver todos </a>
              <div className="grid-community">
                <div>
                  <img src="imagens-orkut/c1.png" />
                  <a> Carros </a>
                </div>
                <div>
                  <img src="imagens-orkut/c2.png" />
                  <a> Desenhos </a>
                </div>
                <div>
                  <img src="imagens-orkut/c3.png" />
                  <a> Crazy </a>
                </div>
                <div>
                  <img src="imagens-orkut/c4.png" />
                  <a> Fotos </a>
                </div>
                <div>
                  <img src="imagens-orkut/c5.png" />
                  <a> Animes </a>
                </div>
                <div>
                  <img src="imagens-orkut/c6.png" />
                  <a> Leitura </a>
                </div>
                <div>
                  <img src="imagens-orkut/c7.png" />
                  <a> Meu ovo </a>
                </div>
                <div>
                  <img src="imagens-orkut/c8.png" />
                  <a> My Books </a>
                </div>
                <div>
                  <img src="imagens-orkut/c9.png" />
                  <a> Cafeeee </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
