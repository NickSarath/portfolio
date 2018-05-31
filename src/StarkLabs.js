import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { starklabs } from './projects.js';

import LongText from './LongText';
import BackNav from './BackNav';
import Video from './Video';
import Profile from './Profile';
import Header from './Header';

const StarkLabs = () =>
  <ReactCSSTransitionGroup
    transitionName="bt"
    transitionEnterTimeout={700}
    transitionLeaveTimeout={700}
    transitionAppear={true}
    transitionAppearTimeout={1000}
  >
  <Header>{starklabs.projectName}</Header>
    <div className="container projectPage">
      <div className="spacer"></div>
      <section className="about">
        <img src={starklabs.header} className="appImage lessWide2" />
        <div className="spacer0"></div>

        <h2 id="largeTitle">{starklabs.projectName}</h2>
        <h3>{starklabs.title}</h3>
        <LongText>{starklabs.date}</LongText>
        <div className="spacer0"></div>
        <LongText>{starklabs.description}</LongText>
        <div className="spacer0"></div>
        <a href="//www.starklabs.io"><img className="appStore grow" src={starklabs.appImg} /></a>
        <div className="spacer"></div>
        <hr className="hr3" />
        <div className="spacer"></div>

        {/* Home */}
        <img src={starklabs.img1} className="appImage extraWide" />
        <div className="spacer"></div>
        <h1>{starklabs.header1}</h1>
        <LongText>{starklabs.text1}</LongText>
        <div className="spacer"></div>

        {/* Requesting */}
        <img src={starklabs.img2} className="appImage extraWide" />
        <div className="spacer"></div>
        <h1>{starklabs.header2}</h1>
        <LongText>{starklabs.text2}</LongText>
        <div className="spacer"></div>

        {/* Requesting */}
        <img src={starklabs.img3} className="appImage" />
        <div className="spacer"></div>
        <h1>{starklabs.header3}</h1>
        <LongText>{starklabs.text3}</LongText>
        <div className="spacer"></div>


        <div className="spacer0"></div>
      </section>
    </div>
  </ReactCSSTransitionGroup>

export default StarkLabs;