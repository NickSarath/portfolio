import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { turtle } from './projects.js';

import LongText from './LongText';
import BackNav from './BackNav';
import Video from './Video';

const Turtle = () =>
  <ReactCSSTransitionGroup
    transitionName="bt"
    transitionEnterTimeout={700}
    transitionLeaveTimeout={700}
    transitionAppear={true}
    transitionAppearTimeout={1000}
  >
    <div className="container projectPage">
      <div className="spacer"></div>
      <BackNav />
      <section className="about">
        <Video src="https://player.vimeo.com/video/257406782?color=54EED9&title=0&byline=0&portrait=0" />
        <div className="spacer0"></div>
        
        <h2 id="largeTitle">{turtle.projectName}</h2>
        <h3>{turtle.title}</h3>
        <LongText>{turtle.date}</LongText>
        <div className="spacer0"></div>
        <LongText>{turtle.description}</LongText>
        <div className="spacer0"></div>
        <a href="#"><img className="appStore grow" src={turtle.appImg} /></a>
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
        <div id="iconbox">
          <h1 id="texts" className="icon-line">{turtle.header3}</h1>
          <div id="icon1">
            <img src="thumb-down-button.png" />
          </div>
        </div>
        <img src={turtle.img3} className="appImage" />
        <div className="spacer"></div>

        {/* What Turtle feels like */}
        <div id="iconbox">
          <h1 id="texts" className="icon-line">{turtle.header4}</h1>
          <div id="icon2">
            <img src="thumb-up-button.png" />
          </div>
        </div>
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
        <h1>{turtle.header9.substr(0,24)}<span className="italic">{turtle.header9.substr(24)}</span></h1>
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
        <div className="spacer"></div>

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
        <img src={turtle.img18} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header18}</h1>
        <LongText>{turtle.text18}</LongText>
        <div className="spacer2"></div>

      </section>
    </div>
  </ReactCSSTransitionGroup>

  export default Turtle;