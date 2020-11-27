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
import { LCCSlide } from "../../Slides/LCCSlide";
import { FreelanceSlide } from "../../Slides/FreelanceSlide";
import { SoWhatSlide } from "../../Slides/SoWhatSlide";
import { ItsOkaySlide } from "../../Slides/ItsOkaySlide";
import { PlayfulCodeSlide } from "../../Slides/PlayfulCodeSlide";
import { LinkSlide } from "../../Slides/LinkSlide";
import { DynamicSlide } from "../../Slides/DynamicSlide";
import { DoesWorkSlide } from "../../Slides/DoesWorkSlide";
import { LoveDesign } from "../../Slides/LoveDesign";
import { UniqueSlide } from "../../Slides/UniqueSlide";
import { ThingsSlide } from "../../Slides/ThingsSlide";
import { RapidSlide } from "../../Slides/RapidSlide";
import { PrototypeSlide } from "../../Slides/PrototypeSlide";
import { ToolsSlide } from "../../Slides/ToolsSlide";
import { FriendsOfKerouacSlide } from "../../Slides/FriendsOfKerouacSlide";
import { WorkIntroSlide } from "../../Slides/WorkIntroSlide";
import { MasterWikiSlide } from "../../Slides/Masterwiki";
import { KinegramSlide } from "../../Slides/KinegramSlide";
import { CreativeElephant } from "../../Slides/CreativeElephantSlide";
import { DrumGeneratesSlide } from "../../Slides/DrumGenerates";
import { ExitSlide } from "../../Slides/ExitSlide";

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
        <Route path="/main/13" exact>
          <LCCSlide />
        </Route>
        <Route path="/main/14" exact>
          <FreelanceSlide />
        </Route>
        <Route path="/main/15" exact>
          <SoWhatSlide />
        </Route>
        <Route path="/main/16" exact>
          <ItsOkaySlide />
        </Route>
        <Route path="/main/17" exact>
          <PlayfulCodeSlide />
        </Route>
        <Route path="/main/18" exact>
          <LinkSlide />
        </Route>
        <Route path="/main/19" exact>
          <DoesWorkSlide />
        </Route>
        <Route path="/main/20" exact>
          <LoveDesign />
        </Route>
        <Route path="/main/21" exact>
          <DynamicSlide />
        </Route>
        <Route path="/main/22" exact>
          <UniqueSlide />
        </Route>
        <Route path="/main/23" exact>
          <ThingsSlide />
        </Route>
        <Route path="/main/24" exact>
          <RapidSlide />
        </Route>
        <Route path="/main/25" exact>
          <PrototypeSlide />
        </Route>
        <Route path="/main/26" exact>
          <ToolsSlide />
        </Route>
        <Route path="/main/27" exact>
          <WorkIntroSlide />
        </Route>
        <Route path="/main/28" exact>
          <FriendsOfKerouacSlide />
        </Route>
        <Route path="/main/29" exact>
          <MasterWikiSlide />
        </Route>
        <Route path="/main/30" exact>
          <KinegramSlide />
        </Route>
        <Route path="/main/31" exact>
          <CreativeElephant />
        </Route>
        <Route path="/main/32" exact>
          <DrumGeneratesSlide />
        </Route>
        <Route path="/main/33" exact>
          <ExitSlide />
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
