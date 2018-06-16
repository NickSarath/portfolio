import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fleet } from './projects.js';

import LongText from './LongText';
import BackNav from './BackNav';
import Video from './Video';
import Profile from './Profile';
import Header from './Header';

const Fleet = () =>
  <ReactCSSTransitionGroup
    transitionName="bt"
    transitionEnterTimeout={700}
    transitionLeaveTimeout={700}
    transitionAppear={true}
    transitionAppearTimeout={1000}
  >
  <Header>{fleet.projectName}</Header>
    <div className="container projectPage">
      <div className="spacer"></div>
      <section className="about">
        <img src={fleet.header} className="appImage extraWide" />
        <div className="spacer0"></div>

        <h2 id="largeTitle">{fleet.projectName}</h2>
        <h3>{fleet.title}</h3>
        <LongText bold>{fleet.date}</LongText>
        <div className="spacer0"></div>
        <LongText>{fleet.description}</LongText>
        <hr />

        {/* Existing */}
        <img src={fleet.img2} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header2}</h1>
        <LongText>{fleet.text2}</LongText>
        <div className="spacer"></div>

        {/* First */}
        <h1>{fleet.header3}</h1>
        <LongText>{fleet.text3}</LongText>
        <div className="spacer"></div>

        {/* Connecting */}
        <img src={fleet.img4} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header4}</h1>
        <LongText>{fleet.text4}</LongText>
        <div className="spacer"></div>

        {/* Consulting */}
        <img src={fleet.img5} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header5}</h1>
        <LongText>{fleet.text5}</LongText>
        <div className="spacer"></div>

        {/* Use of color */}
        <img src={fleet.img6} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header6}</h1>
        <LongText>{fleet.text6}</LongText>
        <div className="spacer"></div>

        {/* Meetups */}
        <img src={fleet.img7} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header7}</h1>
        <LongText>{fleet.text7}</LongText>
        <div className="spacer"></div>

        {/* Core Usability */}
        <img src={fleet.img8} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header8}</h1>
        <LongText>{fleet.text8}</LongText>
        <div className="spacer"></div>

        {/* Event filtering */}
        <img src={fleet.img9} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header9}</h1>
        <LongText>{fleet.text9}</LongText>
        <div className="spacer"></div>

        {/* Event Page */}
        <img src={fleet.img10} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header10}</h1>
        <LongText>{fleet.text10}</LongText>
        <div className="spacer"></div>

        {/* Attending */}
        <img src={fleet.img11} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header11}</h1>
        <LongText>{fleet.text11}</LongText>
        <div className="spacer"></div>

        {/* Event options */}
        <img src={fleet.img12} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header12}</h1>
        <LongText>{fleet.text12}</LongText>
        <div className="spacer"></div>

        {/* Location options */}
        <img src={fleet.img13} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header13}</h1>
        <LongText>{fleet.text13}</LongText>
        <div className="spacer"></div>

        {/* Cars attending */}
        <img src={fleet.img14} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header14}</h1>
        <LongText>{fleet.text14}</LongText>
        <div className="spacer"></div>

        {/* Profile page */}
        <img src={fleet.img15} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header15}</h1>
        <LongText>{fleet.text15}</LongText>
        <div className="spacer"></div>
      
        {/* Profile banners */}
        <img src={fleet.img16} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header16}</h1>
        <LongText>{fleet.text16}</LongText>
        <div className="spacer"></div>

        {/* Profile transition */}
        <img src={fleet.img17} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header17}</h1>
        <LongText>{fleet.text17}</LongText>
        <div className="spacer"></div>

        {/* Garage */}
        <img src={fleet.img18} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header18}</h1>
        <LongText>{fleet.text18}</LongText>
        <div className="spacer"></div>

        {/* Finding services */}
        <img src={fleet.img19} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header19}</h1>
        <LongText>{fleet.text19}</LongText>
        <div className="spacer"></div>

        {/* Services page */}
        <img src={fleet.img20} className="appImage" />
        <div className="spacer"></div>
        <h1>{fleet.header20}</h1>
        <LongText>{fleet.text20}</LongText>
        <div className="spacer"></div>

        {/* Concluding */}
        <img src={fleet.img21} className="appImage extraWide" />
        <div className="spacer"></div>
        <h1>{fleet.header21}</h1>
        <LongText>{fleet.text21}</LongText>
        <div className="spacer"></div>


        <div className="spacer0"></div>
      </section>
    </div>
  </ReactCSSTransitionGroup>

export default Fleet;