import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { stories } from './projects.js';

import LongText from './LongText';
import BackNav from './BackNav';
import Video from './Video';
import Profile from './Profile';
import Header from './Header';

const Stories = () =>
  <ReactCSSTransitionGroup
    transitionName="bt"
    transitionEnterTimeout={700}
    transitionLeaveTimeout={700}
    transitionAppear={true}
    transitionAppearTimeout={1000}
  >
  <Header>{stories.projectName}</Header>
    <div className="container projectPage">
      <div className="spacer"></div>
      <section className="about">
        <img src={stories.header} className="appImage extraWide" />
        <div className="spacer0"></div>

        <h2 id="largeTitle">{stories.projectName}</h2>
        <h3>{stories.title}</h3>
        <LongText>{stories.date}</LongText>
        <div className="spacer0"></div>
        <LongText>{stories.description}</LongText>
        <hr />

        {/* Existing */}
        <img src={stories.img1} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header1}</h1>
        <LongText>{stories.text1}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <img src={stories.img2} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header2}</h1>
        <LongText>{stories.text2}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <img src={stories.img3} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header3}</h1>
        <LongText>{stories.text3}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <Video src={stories.video4} />
        <div className="spacer"></div>
        <h1>{stories.header4}</h1>
        <LongText>{stories.text4}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <img src={stories.img5} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header5}</h1>
        <LongText>{stories.text5}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <img src={stories.img6} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header6}</h1>
        <LongText>{stories.text6}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <img src={stories.img7} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header7}</h1>
        <LongText>{stories.text7}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <img src={stories.img8} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header8}</h1>
        <LongText>{stories.text8}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <img src={stories.img9} className="appImage" />
        <div className="spacer"></div>
        <h1>{stories.header9}</h1>
        <LongText>{stories.text9}</LongText>
        <div className="spacer"></div>

        {/* Existing */}
        <Video src={stories.video10} />
        <div className="spacer"></div>
        <h1>{stories.header10}</h1>
        <LongText>{stories.text10}</LongText>
        <div className="spacer"></div>




        <div className="spacer0"></div>
      </section>
    </div>
  </ReactCSSTransitionGroup>

export default Stories;