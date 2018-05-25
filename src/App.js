import React, { Component } from 'react';
import './App.css';
import { projects, summary, about, turtle } from './projects.js';
import { Switch, Route } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Turtle from './Turtle';
import LongText from './LongText';
import BackNav from './BackNav';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/turtle' component={Turtle} />
    </Switch>
  </main>
)

class About extends Component {
  render() {
    return (
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
          <div className="about2">
            <section className="about">
              <h1>About</h1>
              <LongText>{about.summary}</LongText>
            </section>
            <div className="aboutImage">
              <img src={about.mainImg} align="right" />
            </div>
          </div>
          <hr className="hr2" />
          <section className="about">
            <h1>Passion</h1>
            <LongText>{about.passion}</LongText>
          </section>
          <hr className="hr2" />
          <section className="about">
            <h1>Friends, Mentors, Investors</h1>
            <LongText>{about.friends}</LongText>
            <ImageGrid />
          </section>
          <hr className="hr2" />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="spacer"></div>
          <ReactCSSTransitionGroup
            transitionName="bt"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
            transitionAppear={true}
            transitionAppearTimeout={1000}
          >
            <section className="about">
              <Tag color="#1d8cff">ABOUT</Tag>
              <h1>Povchhadarith Sarath</h1>
              <LongText>{summary} <Link url="/about">Learn More</Link></LongText>
              <hr />
            </section>
            <section className="projects">
              <Tag color="#34393f">FAVORITE WORK & PROJECTS</Tag>
              <div className="spacer"></div>
              {projects.map((project) =>
                <Project key={project.title}
                  img1={project.img1}
                  img2={project.img2}
                  title={project.title}
                  desc={project.description}
                  url={project.url}
                />
              )}
              <hr />
            </section>
            <section className="mentions">
              <Tag color="#f7b021">NOTABLE MENTIONS</Tag>
              <Mention><em>Lead a team of 6</em> very talented people for over a year.</Mention>
              <Mention><em>Obtained over 4,000</em> users within 3 days without spending money on marketing.</Mention>
              <Mention><em>Top 100 Charts</em> on the social network category of the App Store.</Mention>
              <Mention><em>Over 100</em> ratings and reviews on the <a href="//itunes.apple.com/us/app/turtle-chat-anonymously/id1313518475">App Store.</a></Mention>
              <Mention><em>Made it to the Trending page</em> on the App Store.</Mention>
              <Mention><em>Featured as Product of the day</em> on <a href="//www.producthunt.com/@nicksarath">ProductHunt</a> twice.</Mention>
              <Mention><em>18,000</em> shot views on <a href="//dribbble.com/nicksarath">Dribbble</a>.</Mention>
              <Mention><em>Covered by</em> <a href="https://techcrunch.com/2017/12/07/phonewagon-raises-1-2m-to-track-when-marketing-campaigns-lead-to-phone-calls/">TechCrunch</a> and <a href="http://www.businessinsider.com/turtle-is-a-new-take-on-chat-for-gen-z-2017-12">Business Insider</a>.</Mention>
              <hr className="hr2" />
            </section>
            
          </ReactCSSTransitionGroup>
        </div>
        <div className="spacer2"></div>
      </div>
    );
  }
}



const ImageGrid = ({ }) =>
  <div className="row">
    <div className="column">
      <img src={about.img1} />
      <img src={about.img4} />
    </div>
    <div className="column">
      <img src={about.img2} />
      <img src={about.img5} />
    </div>
    <div className="column">
      <img src={about.img3} />
      <img src={about.img6} />
    </div>
  </div>



const Mention = ({ children }) =>
  <p className="mention">{children}</p>

const Tag = ({ color, children }) => {
  let tagStyle = {
    backgroundColor: color,
  }
  return (
    <div className="tag" style={tagStyle}>
      <p>{children}</p>
    </div>
  );
}


const Link = ({ url, children }) =>
  <a href={url}>
    <div className="forwardNav">

      <h4>Learn More</h4>
      <img src="right.png" />

    </div>
  </a>


const PreviewImages = ({ img1, img2, url }) => {
  let mainImg = {
    height: '192px',
    left: '0px',
    top: '0px',
    width: '255px',
    borderRadius: '5px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0)',
    backgroundImage: "url(" + img1 + ")",
    boxShadow: "0 2px 14px 0 rgba(0, 0, 0, 0.13)",
  }
  return (
    <div className="previewImages grow">
      <a href={url}>
        <img id="mainImg" style={mainImg} src={img1} />
      </a>
    </div>
  );
}

const Project = ({ img1, img2, title, desc, url }) =>
  <div>
    <div className="projectBlock">
      <div className="project">
        <PreviewImages img1={img1} img2={img2} url={url} />
        <div className="description">
          <h1 className="projectTitle">{title}</h1>
          <p className="projectDesc">{desc}</p>
          <Link url={url}>Learn More</Link>
        </div>
      </div>

    </div>
    <hr className="project-hr" />
  </div>


export default Main;
