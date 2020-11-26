import React from "react";
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";
import { SlideCommonFooter } from "../../components/SlideCommon/SliderCommonFooter";
import { SlideOne } from "../../Slides/SlideOne";
import { SlideTwo } from "../../Slides/SlideTwo";
import { SlideThree } from "../../Slides/SlideThree";
import { SlideFour } from "../../Slides/SlideFour";

const MainPage: React.FC = () => {
  // let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path="/main/1" exact>
          <SlideOne />
        </Route>
        <Route path="/main/2" exact>
          <SlideTwo />
        </Route>
        <Route path="/main/3" exact>
          <SlideThree />
        </Route>
        <Route path="/main/4" exact>
          <SlideFour />
        </Route>
        <Route>
          <Redirect to="/main/1" />
        </Route>
      </Switch>
      <SlideCommonFooter />
    </>
  );
};

export { MainPage };
