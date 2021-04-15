import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SlideCommonFooter } from "../../components/SlideCommon/SliderCommonFooter";
import { UserPressFeedback } from "../../components/UserPressFeedback";

import { IntroSlide } from "../../Slides/IntroSlide";
import { MeSlide } from "../../Slides/MeSlide";
import { TinderSlide } from "../../Slides/TinderSlide";
import { InteractionSlide } from "../../Slides/InteractionSlide";
import { SlideQuestionTemplate } from "../../components/SlideQuestionTemplate";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";
import { Bouncer } from "../../components/Bouncer";

const p = (path: string) => `${process.env.PUBLIC_URL}${path}`;

const MainPage: React.FC = () => {
  // let { path } = useRouteMatch();

  return (
    <UserPressFeedback>
      <Switch>
        <Route path="/main/1" exact>
          <IntroSlide />
        </Route>
        <Route path="/main/2" exact>
          <MeSlide />
        </Route>
        <Route path="/main/3" exact>
          <TinderSlide />
        </Route>
        <Route path="/main/4" exact>
          <InteractionSlide />
        </Route>
        <Route path="/main/5" exact>
          <SlideQuestionTemplate
            oneIcon="✅"
            twoIcon="❌"
            one="Yes"
            two="No"
            title="Is this working?"
          />
        </Route>
        <Route path="/main/6" exact>
          <SlideQuestionTemplate
            smallIcon
            oneIcon="I'm a bad person 👿"
            twoIcon="I'm a good person 😇"
            one="Yes"
            two="No"
            title="Did you lie on the previous question?"
          />
        </Route>
        <Route path="/main/7" exact>
          <SlideQuestionTemplate
            one="Analog"
            two="Digital"
            title="Are you an analog or digital person?"
            graphs
            iconLife={2000}
            smallIcon
          />
        </Route>
        <Route path="/main/8" exact>
          <SlideQuestionTemplate
            one="I think so"
            two="I don't think so"
            title="Do you wish you were more analog/digital?"
            graphs
            iconLife={2000}
            smallIcon
          />
        </Route>
        <Route path="/main/9" exact>
          <SlideTitleTemplate
            withPresses
            title="Now for some actual work"
            subtitle="But feel free to tap away"
          />
        </Route>
        <Route path="/main/10" exact>
          <SlideMediaTemplate
            withPresses
            attribute="MSCHF"
            big
            media={p("/photos/mschf.png")}
          />
        </Route>
        <Route path="/main/11" exact>
          <SlideMediaTemplate
            withPresses
            attribute="MSCHF"
            big
            media={p("/photos/satanshoes.png")}
          />
        </Route>
        <Route path="/main/12" exact>
          <SlideMediaTemplate
            withPresses
            attribute="MSCHF – americanflaglogs.com"
            big
            media={p("/photos/afl.png")}
          />
        </Route>
        <Route path="/main/13" exact>
          <SlideMediaTemplate
            withPresses
            attribute="MSCHF – spottingplutes.com/?ref=mschfapp"
            big
            media={p("/photos/spottingplutes.png")}
          />
        </Route>
        <Route path="/main/14" exact>
          <SlideMediaTemplate
            withPresses
            attribute="MSCHF – cardvcard.com"
            big
            media={p("/photos/cardvcard.png")}
          />
        </Route>
        <Route path="/main/15" exact>
          <SlideMediaTemplate
            withPresses
            attribute="MSCHF – masterwiki.how"
            big
            media={p("/video/masterwiki.mp4")}
            video
          />
        </Route>
        <Route path="/main/16" exact>
          <SlideMediaTemplate
            withPresses
            attribute="RCA"
            big
            media={p("/photos/rca.png")}
          />
        </Route>
        <Route path="/main/17" exact>
          <SlideMediaTemplate
            withPresses
            attribute="Creative Elephant"
            big
            media={p("/video/creativeelephant.mp4")}
            video
          />
        </Route>
        <Route path="/main/18" exact>
          <SlideMediaTemplate
            withPresses
            attribute="Spitfire Audio"
            big
            media={p("/photos/labs.png")}
          />
        </Route>
        <Route path="/main/19" exact>
          <SlideMediaTemplate
            withPresses
            attribute="Spitfire Audio"
            big
            media={p("/video/labs.mp4")}
            video
          />
        </Route>
        <Route path="/main/20" exact>
          <SlideMediaTemplate
            withPresses
            attribute="Puma"
            big
            media={p("/video/puma.mp4")}
            video
          />
        </Route>
        <Route path="/main/21" exact>
          <SlideMediaTemplate
            withPresses
            attribute="friendsofkerouac.com"
            big
            media={p("/video/fok.mp4")}
            video
          />
        </Route>
        <Route path="/main/22" exact>
          <SlideMediaTemplate
            withPresses
            attribute="films.jthaw.club"
            big
            media={p("/photos/films.png")}
          />
        </Route>
        <Route path="/main/23" exact>
          <SlideMediaTemplate
            withPresses
            attribute="endlessvine.co"
            big
            media={p("/photos/vine.png")}
          />
        </Route>
        <Route path="/main/24" exact>
          <SlideMediaTemplate withPresses media={p("/photos/diagram.png")} />
        </Route>
        <Route path="/main/25" exact>
          <SlideMediaTemplate
            withPresses
            attribute="kinegram.app"
            big
            media={p("/video/kinegram.mp4")}
            video
          />
        </Route>
        <Route path="/main/26" exact>
          <SlideMediaTemplate
            withPresses
            attribute="Collage Characters"
            big
            media={p("/video/sennep.mp4")}
            video
          />
        </Route>
        <Route path="/main/27" exact>
          <SlideMediaTemplate
            withPresses
            big
            media={p("/video/dreamers.mp4")}
            video
          />
        </Route>
        <Route path="/main/28" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums1.jpg")} />
        </Route>
        <Route path="/main/29" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums4.jpg")} />
        </Route>
        <Route path="/main/30" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums8.jpg")} />
        </Route>
        <Route path="/main/31" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums2.jpg")} />
        </Route>
        <Route path="/main/32" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums3.jpg")} />
        </Route>
        <Route path="/main/33" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums5.jpg")} />
        </Route>
        <Route path="/main/34" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums6.jpg")} />
        </Route>
        <Route path="/main/35" exact>
          <SlideMediaTemplate withPresses big media={p("/photos/drums7.jpg")} />
        </Route>
        <Route path="/main/36" exact>
          <SlideMediaTemplate
            withPresses
            big
            media={p("/photos/contactsheet.jpeg")}
          />
        </Route>
        <Route path="/main/37" exact>
          <SlideMediaTemplate
            big
            withPresses
            media={p("/video/digital-animation.mp4")}
            video
          />
        </Route>
        <Route path="/main/38" exact>
          <SlideMediaTemplate
            big
            withPresses
            media={p("/video/analog-animation.mp4")}
            video
          />
        </Route>
        <Route path="/main/39" exact>
          <SlideMediaTemplate
            attribute="generate.jthaw.club"
            withPresses
            big
            media={p("/photos/generate.png")}
          />
        </Route>
        <Route path="/main/40" exact>
          <SlideTitleTemplate
            withPresses
            title="Basically"
            subtitle="(Terrible, harsh segue)"
          />
        </Route>
        <Route path="/main/41" exact>
          <SlideTitleTemplate
            withPresses
            metaTitle="Everything can be"
            title="Experimentation"
            subtitle="Print out, scan back in"
          />
        </Route>
        <Route path="/main/42" exact>
          <SlideTitleTemplate
            withPresses
            metaTitle="Everything can be"
            title="Reverse engineered"
            subtitle="Use computers to make things worse"
          />
        </Route>
        <Route path="/main/43" exact>
          <SlideTitleTemplate
            withPresses
            metaTitle="Everything is an"
            title="Opportunity"
          />
        </Route>
        <Route path="/main/44" exact>
          <SlideTitleTemplate
            withPresses
            metaTitle="Let your skills aid your"
            title="Passions"
            subtitle="(If theyre different)"
          />
        </Route>
        <Route path="/main/45" exact>
          <SlideTitleTemplate withPresses title="Thanks" />
        </Route>
        <Route path="/main/46" exact>
          <SlideTitleTemplate
            withPresses
            title="Newsletter"
            subtitle="📰 jthaw.me/newsletter 📰"
            metaTitle="See the stream of consciousness"
          >
            <Bouncer />
          </SlideTitleTemplate>
        </Route>
        <Route>
          <Redirect to="/main/1" />
        </Route>
      </Switch>
      <SlideCommonFooter />
    </UserPressFeedback>
  );
};

export { MainPage };
