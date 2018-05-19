import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import projects from './projects.js';
import { Switch, Route } from 'react-router'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/schedule' component={LongText} />
    </Switch>
  </main>
)

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="spacer"></div>
        <BackNav />
        <div class="about2">
          <section className="about">
            <h1>About</h1>
            <LongText>I'm a Junior at Cornell studying Information Science. I previously studied business, but then realized banking wasn't the move. I got into product design since I was interested in behavioral economics and art, and the combinations of both fields led me here. I've previously worked at Facebook, Intuit, Function of Beauty, startups around Dallas, and freelancing.</LongText>
          </section>
          <div className="aboutImage">
            <img src="http://via.placeholder.com/218x275/b6bfbf" align="right" />
          </div>
        </div>
        <hr class="hr2"/>
        <section className="about">
          <h1>Passion</h1>
          <LongText>Passion for experience design, with focus on building functional and usable products Doing research, value propositions and information structure Strong eye for clean, pixel perfect design and a relentless attention to detail Sketching, creating wireframes, prototyping, storytelling Usability testing, identifying red routes and card sorting Strong sense of design theory and typography. Very positive attitude with an empathetic and holistic view.</LongText>
        </section>
        <hr class="hr2"/>
        <section className="about">
          <h1>Friends, Mentors, Investors</h1>
          <LongText>I've gotten to know a bunch of awesome designers the past few years. I've learned a lot from them after working with them and maybe having a drink or two. I'm incredibly excited to learn and grow with them as we become the future of the tech industry. </LongText>
        </section>
        <hr class="hr2"/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div class="spacer2"></div>
        <div className="container">
          <section className="about">
            <Tag color="#1d8cff">ABOUT</Tag>
            <h1>Povchhadarith Sarath</h1>
            <LongText>I am a multifunctional product designer currently based in the Washington, D.C. area. I’m currently the founder and CEO of a company called Turtle Labs. My team and I developed an award winning app called Turtle. <Link url="/about">Learn More</Link></LongText>
            <hr />
          </section>
          <section className="mentions">
            <Tag color="#f7b021">NOTABLE MENTIONS</Tag>
            <Mention><em>Bootstrapped</em> an entire company with 6 very talented people</Mention>
            <Mention>Obtained over <em>4,000</em>  users within 3 days without spending money on marketing</Mention>
            <Mention><em>Top 100 Charts</em> on the social network category of the App Store.</Mention>
            <Mention><em>Over 100</em> ratings and reviews on the <a href="#">App Store.</a></Mention>
            <Mention>Made it to the <em>Trending page</em> on the App Store.</Mention>
            <Mention><em>Product of the day</em> on <a href="#">ProductHunt</a> twice.</Mention>
            <Mention><em>18,000</em> shot views on <a href="#">Dribbble</a>.</Mention>
            <Mention><em>Covered by</em> <a href="#">TechCrunch</a> and <a href="#">Business Insiders</a>.</Mention>
            <hr className="hr2" />
          </section>
          <section className="projects">
            <Tag color="#b5c7c7">FAVORITE WORK & PROJECTS</Tag>
            <div class="spacer"></div>
            {projects.map((project) =>
              <Project
                img1={project.img1}
                img2={project.img2}
                title={project.title}
                desc={project.description}
                url={project.url}
              />
            )}
          </section>
        </div>
        <div class="spacer2"></div>
      </div>
    );
  }
}

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
    'background-color': color,
  }
  return (
    <div class="tag" style={tagStyle}>
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
    'border-radius': '5px',
    'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0)',
    "background-image": "url(" + img1 + ")",
    "box-shadow": "0 2px 14px 0 rgba(0, 0, 0, 0.13)",
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
    <div class="projectBlock">
      <div class="project">
        <PreviewImages img1={img1} img2={img2} url={url} />
        <div class="description">
          <h1 className="projectTitle">{title}</h1>
          <p className="projectDesc">{desc}</p>
          <Link url={url}>Learn More</Link>
        </div>
      </div>

    </div>
    <hr className="project-hr" />
  </div>


export default Main;
