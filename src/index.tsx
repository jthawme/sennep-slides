import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { MainContextContainer } from "./components/MainContext";
import "./styles/global.scss";
import { MainPage } from "./Pages/Main";
import { DevicePage } from "./Pages/Device";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/main/:page?">
          <MainContextContainer totalPages={3}>
            <MainPage />
          </MainContextContainer>
        </Route>
        <Route>
          <DevicePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
