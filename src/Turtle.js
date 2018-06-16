import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { turtle, logos, people } from './projects.js';

import LongText from './LongText';
import BackNav from './BackNav';
import Video from './Video';
import Profile from './Profile';
import Header from './Header';

const Turtle = () =>
  <ReactCSSTransitionGroup
    transitionName="bt"
    transitionEnterTimeout={700}
    transitionLeaveTimeout={700}
    transitionAppear={true}
    transitionAppearTimeout={1000}
  >
  <Header>{turtle.projectName}</Header>
    <div className="container projectPage">
      <div className="spacer"></div>
      <section className="about">
        <Video src="https://player.vimeo.com/video/257406782?color=54EED9&title=0&byline=0&portrait=0" />
        <div className="spacer0"></div>

        <h2 id="largeTitle">{turtle.projectName}</h2>
        <h3>{turtle.title}</h3>
        <LongText bold>{turtle.date}</LongText>
        <div className="spacer0"></div>
        <LongText>{turtle.description}</LongText>
        <div className="spacer0"></div>
        <a href="//itunes.apple.com/us/app/turtle-chat-anonymously/id1313518475?mt=8"><img className="appStore grow" src={turtle.appImg} /></a>
        <div className="spacer"></div>
        <hr className="hr3" />
        <div className="spacer"></div>

        {/* New Approach*/}
        <img src={turtle.img1} className="appImage shadow" />
        <div className="spacer"></div>
        <h1>{turtle.header1}</h1>
        <LongText>{turtle.text1}</LongText>
        <div className="spacer"></div>
        <hr className="hr3" />
        <div className="spacer"></div>

        {/* Existing Apps */}
        <img src={turtle.img2} className="appImage extraWide" />
        <div className="spacer"></div>
        <h1>{turtle.header2}</h1>
        <LongText>{turtle.text2}</LongText>
        <div className="spacer"></div>
        <hr className="hr3" />
        <div className="spacer"></div>

        {/* What a typical anonymous app feels like */}
        <h1 id="red">{turtle.header3}</h1>
        <img src={turtle.img3} className="appImage" />
        <div className="spacer"></div>

        {/* What Turtle feels like */}
        <h1 id="blue">{turtle.header4}</h1>
        <img src={turtle.img4} className="appImage" />
        <div className="spacer"></div>
        <hr className="hr3" />
        <div className="spacer"></div>

        {/* First Look */}
        <img src={turtle.img4_5} className="appImage shadow" />
        <div className="spacer"></div>
        <h1>{turtle.header4_5}</h1>
        <LongText>{turtle.text4_5}</LongText>
        <div className="spacer"></div>

        {/* Use of Playful */}
        <img src={turtle.img5} className="appImage lessWide shadow" />
        <div className="spacer"></div>
        <h1>{turtle.header5}</h1>
        <LongText>{turtle.text5}</LongText>
        <div className="spacer"></div>

        {/* Connecting w/ */}
        <img src={turtle.img6} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header6}</h1>
        <LongText>{turtle.text6}</LongText>
        <div className="spacer"></div>

        {/* Establishing */}
        <img src={turtle.img7} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header7}</h1>
        <LongText>{turtle.text7}</LongText>
        <div className="spacer"></div>

        {/* ✨ */}
        <img src={turtle.img8_1} className="appImage lessWide" />
        <div className="spacer"></div>
        <img src={turtle.img8_2} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header8}</h1>
        <LongText>{turtle.text8}</LongText>
        <div className="spacer"></div>

        {/* Someone */}
        <img src={turtle.img9} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header9.substr(0, 24)}<span className="italic">{turtle.header9.substr(24)}</span></h1>
        <LongText>{turtle.text9}</LongText>
        <div className="spacer"></div>

        {/* Messaging */}
        <img src={turtle.img10} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header10}</h1>
        <LongText>{turtle.text10}</LongText>
        <div className="spacer"></div>

        {/* Mitigating */}
        <img src={turtle.img11} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header11}</h1>
        <LongText>{turtle.text11}</LongText>
        <div className="spacer"></div>

        {/* Another */}
        <img src={turtle.img12} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header12}</h1>
        <LongText>{turtle.text12}</LongText>
        <div className="spacer"></div>

        {/* A Sense */}
        <img src={turtle.img13} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header13}</h1>
        <LongText>{turtle.text13}</LongText>
        <div className="spacer"></div>

        {/* Moving */}
        <img src={turtle.img14_1} className="appImage" />
        <div className="spacer"></div>
        <img src={turtle.img14_2} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header14}</h1>
        <LongText>{turtle.text14}</LongText>
        <div className="spacer2"></div>

        {/* My Thoughts */}
        <Video src="https://player.vimeo.com/video/271534368?color=54EED9&title=0&byline=0&portrait=0" />
        <div className="spacer"></div>
        <h1>{turtle.header15}</h1>
        <LongText>{turtle.text15}</LongText>
        <div className="spacer"></div>

        {/* Seamless */}
        <img src={turtle.img16} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header16}</h1>
        <LongText>{turtle.text16}</LongText>
        <div className="spacer"></div>

        {/* Distributing */}
        <img src={turtle.img17} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header17}</h1>
        <LongText>{turtle.text17}</LongText>
        <div className="spacer"></div>

        {/* Iterating */}
        <img src={turtle.img18} className="appImage lessWide2" />
        <div className="spacer"></div>
        <h1>{turtle.header18}</h1>
        <LongText>{turtle.text18}</LongText>
        <div className="spacer2"></div>

        {/* User Photos */}
        <img src={turtle.img19} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header19}</h1>
        <LongText>{turtle.text19}</LongText>
        <div className="spacer"></div>

        {/* Experimenting */}
        <img src={turtle.img20} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header20}</h1>
        <LongText>{turtle.text20}</LongText>
        <div className="spacer"></div>

        {/* Days */}
        <img src={turtle.img21} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header21}</h1>
        <LongText>{turtle.text21}</LongText>
        <div className="spacer"></div>

        {/* Overall Experience */}
        <img src={turtle.img22} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header22}</h1>
        <LongText>{turtle.text22}</LongText>
        <div className="spacer"></div>

        {/* Credits */}
        <h1>{turtle.header23}</h1>
        <LongText>{turtle.text23}</LongText>
        <div>
          <div className="spacer0"></div>
          <div className="row logos">
            <div className="col-sm-6 col-md-3 col-6">
              <img id="logo1" src={logos.logo1} className="logo" />
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              <img id="logo2" src={logos.logo2} className="logo" />
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              <img id="logo3" src={logos.logo3} className="logo" />
            </div>
            <div className="col-sm-6 col-md-3 col-6">
              <img id="logo4" src={logos.logo4} className="logo" />
            </div>
          </div>
          <div className="spacer"></div>
        </div>

        {people.map((person) =>
          <Profile person={person} />
        )}

        <div className="spacer0"></div>
      </section>
    </div>
  </ReactCSSTransitionGroup>

export default Turtle;