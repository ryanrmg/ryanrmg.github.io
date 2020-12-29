import About from './About'
import Other from './Other'
import Experience from './Experience'
import Projects from './Projects'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'about'
    }
  }
  setView = (newView) => {
    // window.location.href = window.location.origin + '/' + newView
    this.setState({ view: newView })
  }
  render() {
    return (
      <Router>
        <div className='navbar'>
          <nav>
            <ul>
              <li>
                <Link to="/" className={this.state.view === 'about' ? 'nav-bold' : ''} onClick={() => {this.setView('about')}}>ABOUT</Link>
              </li>
              <li>
                <Link to="/projects" className={this.state.view === 'projects' ? 'nav-bold' : ''} onClick={() => {this.setView('projects')}}>PROJECTS</Link>
              </li>
              <li>
                <Link to="/experience" className={this.state.view === 'experience' ? 'nav-bold' : ''} onClick={() => {this.setView('experience')}}>EXPERIENCE</Link>
              </li>
              <li>
                <Link to="/other" className={this.state.view === 'other' ? 'nav-bold' : ''} onClick={() => {this.setView('other')}}>OTHER</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/other">
              <Other />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <About />
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}