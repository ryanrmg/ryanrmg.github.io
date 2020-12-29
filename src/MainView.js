import React from 'react'
import './styles/styles.scss'

import Nav from './Nav'
import About from './About'
import Other from './Other'
import Experience from './Experience'
import Projects from './Projects'

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
    console.log('heyo')
    // console.log(window.location.href.indexOf('experience') > -1)
    let content = null
    // console.log(this.state.view)
    if (this.state.view === 'about')
      content = <About></About>
    if (this.state.view === 'other')
      content = <Other></Other>
    if (this.state.view === 'experience')
      content = <Experience></Experience>
    if (this.state.view === 'projects')
      content = <Projects></Projects>
    return (
      <div className="container">
        <div className="main-nav">
          <Nav
            view={this.state.view}
            changeView={this.setView}
          ></Nav>
        </div>
        <div className="view-content">
          {content}
        </div>
      </div>
    )
  }
}
