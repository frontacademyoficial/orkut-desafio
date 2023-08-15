import "./styles/reset.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Perfil from "./pages/Perfil/Perfil";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <Router>
      <div>
        <Menu />

        <Switch>
          <Route path="/perfil">
            <Perfil />
          </Route>

          <Route path="/jogos/:nomeDoJogo/:qualquerCoisa">
            <Perfil />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="*">
            <div>404 not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
