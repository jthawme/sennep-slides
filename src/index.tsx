import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { MainContextContainer } from "./components/MainContext";
// import './index.css';
import { MainPage } from "./Pages/Main";

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
          <Redirect to="/main" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
