import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Principal from './pages/Principal.js';

function App() {
  return (
    <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/principal"} component={Principal} />
          </Switch>
        </BrowserRouter>
  );
}

export default App;
