import { useLocation, useParams } from "react-router-dom";
import "./styles/styles.css";

function Perfil() {
  const location = useLocation();
  const params = useParams();

  console.log({ location, params });

  return <div>Perfil</div>;
}

export default Perfil;
