import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SlideCommonFooter } from "../../components/SlideCommon/SliderCommonFooter";
import { IntroSlide } from "../../Slides/IntroSlide";
import { VennSlide } from "../../Slides/VennSlide";
import { ProfessionalWorkSlide } from "../../Slides/ProfessionalWorkSlide";
import { PersonalPracticeSlide } from "../../Slides/PersonalPracticeSlide";
import { TalkIntroSlide } from "../../Slides/TalkIntroSlide";
import { UcaSlide } from "../../Slides/UcaSlide";
import { SwoSlide } from "../../Slides/SwoSlide";
import { InternSlide } from "../../Slides/InternSlide";
import { BoatSlide } from "../../Slides/BoatSlide";
import { SwoSitesSlide } from "../../Slides/SwoSitesSlide";
import { ToasterIntroSlide } from "../../Slides/ToasterIntroSlide";
import { UserPressFeedback } from "../../components/UserPressFeedback";
import { ToasterTechSlide } from "../../Slides/ToasterTechSlide";

const MainPage: React.FC = () => {
  // let { path } = useRouteMatch();

  return (
    <>
      <UserPressFeedback />
      <Switch>
        <Route path="/main/1" exact>
          <IntroSlide />
        </Route>
        <Route path="/main/2" exact>
          <VennSlide />
        </Route>
        <Route path="/main/3" exact>
          <ProfessionalWorkSlide />
        </Route>
        <Route path="/main/4" exact>
          <PersonalPracticeSlide />
        </Route>
        <Route path="/main/5" exact>
          <TalkIntroSlide />
        </Route>
        <Route path="/main/6" exact>
          <UcaSlide />
        </Route>
        <Route path="/main/7" exact>
          <SwoSlide />
        </Route>
        <Route path="/main/8" exact>
          <InternSlide />
        </Route>
        <Route path="/main/9" exact>
          <BoatSlide />
        </Route>
        <Route path="/main/10" exact>
          <SwoSitesSlide />
        </Route>
        <Route path="/main/11" exact>
          <ToasterIntroSlide />
        </Route>
        <Route path="/main/12" exact>
          <ToasterTechSlide />
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
