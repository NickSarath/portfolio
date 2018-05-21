import React, { Component } from 'react';
import './App.css';
import { projects, summary, about, turtle } from './projects.js';
import { Switch, Route } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

const Turtle = ({ }) =>
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
        <Video src="//www.youtube.com/embed/IAHmu0lhcIs?rel=0&amp;controls=0&amp;showinfo=0" />
        <div className="spacer0"></div>
        
        <h2>{turtle.projectName}</h2>
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
        <div className="spacer2"></div>

        {/* ✨ */}
        <img src={turtle.img8_1} className="appImage lessWide" />
        <div className="spacer"></div>
        <img src={turtle.img8_2} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header8}</h1>
        <LongText>{turtle.text8}</LongText>
        <div className="spacer"></div>

        {/* Attention */}
        <img src={turtle.img9} className="appImage" />
        <div className="spacer"></div>
        <h1>{turtle.header9}</h1>
        <LongText>{turtle.text9}</LongText>
        <div className="spacer2"></div>

      </section>
    </div>
  </ReactCSSTransitionGroup>

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

            <section className="mentions">
              <Tag color="#f7b021">NOTABLE MENTIONS</Tag>
              <Mention><em>Bootstrapped</em> an entire company with 6 very talented people</Mention>
              <Mention>Obtained over <em>4,000</em> users within 3 days without spending money on marketing</Mention>
              <Mention><em>Top 100 Charts</em> on the social network category of the App Store.</Mention>
              <Mention><em>Over 100</em> ratings and reviews on the <a href="//itunes.apple.com/us/app/turtle-chat-anonymously/id1313518475">App Store.</a></Mention>
              <Mention>Made it to the <em>Trending page</em> on the App Store.</Mention>
              <Mention><em>Product of the day</em> on <a href="//www.producthunt.com/@nicksarath">ProductHunt</a> twice.</Mention>
              <Mention><em>18,000</em> shot views on <a href="//dribbble.com/nicksarath">Dribbble</a>.</Mention>
              <Mention><em>Covered by</em> <a href="https://techcrunch.com/2017/12/07/phonewagon-raises-1-2m-to-track-when-marketing-campaigns-lead-to-phone-calls/">TechCrunch</a> and <a href="http://www.businessinsider.com/turtle-is-a-new-take-on-chat-for-gen-z-2017-12">Business Insider</a>.</Mention>
              <hr className="hr2" />
            </section>
            <section className="projects">
              <Tag color="#b5c7c7">FAVORITE WORK & PROJECTS</Tag>
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
            </section>
          </ReactCSSTransitionGroup>
        </div>
        <div className="spacer2"></div>
      </div>
    );
  }
}

const Video = ({ src }) =>
  <div className="videoContainer">
    <iframe title="turtle-video" src="https://player.vimeo.com/video/257406782?color=54EED9&title=0&byline=0&portrait=0"
      frameBorder="0" allowFullScreen className="video"></iframe>
  </div>

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

const BackNav = ({ path }) =>
  <div className="backNav">
    <a href="/">
      <img src="left.png" />
      <h3>Back</h3>
    </a>
  </div>

const Mention = ({ children }) =>
  <p className="mention"> - {children}</p>

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

const LongText = ({ children }) =>
  <div className="longText">
    {children}
  </div>

const Link = ({ url, children }) =>
  <a href={url} className="link">
    {children}
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
