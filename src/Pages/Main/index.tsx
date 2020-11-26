import React from "react";
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";
import { SlideOne } from "../../Slides/SlideOne";

const MainPage: React.FC = () => {
  // let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path="/main/1" exact>
        <SlideOne />
      </Route>
      <Route path="/main/2" exact>
        main page
      </Route>
      <Route path="/main/3" exact>
        main page
      </Route>
      <Route>
        <Redirect to="/main/1" />
      </Route>
    </Switch>
  );
};

export { MainPage };
