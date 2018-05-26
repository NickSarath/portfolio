import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fleet } from './projects.js';

import LongText from './LongText';
import BackNav from './BackNav';
import Video from './Video';
import Profile from './Profile';

const Fleet = () =>
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
        <img src={fleet.header} className="appImage extraWide" />
        <div className="spacer0"></div>

        <h2 id="largeTitle">{fleet.projectName}</h2>
        <h3>{fleet.title}</h3>
        <LongText>{fleet.date}</LongText>
        <div className="spacer0"></div>
        <LongText>{fleet.description}</LongText>
        <div className="spacer0"></div>
        <div className="spacer"></div>
        <hr className="hr3" />
        <div className="spacer"></div>

        <div className="spacer0"></div>
      </section>
    </div>
  </ReactCSSTransitionGroup>

export default Fleet;