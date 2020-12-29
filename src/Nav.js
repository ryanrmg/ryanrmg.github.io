import React from 'react'
import './styles/styles.scss'


export default class Nav extends React.Component { 


  render() {

    return (
      <div className="navbar">
        <button className={this.props.view === 'projects' ? 'nav-bold' : ''} onClick={() => {this.props.changeView('projects')}}>PROJECTS</button>
        <button className={this.props.view === 'experience' ? 'nav-bold' : ''} onClick={() => {this.props.changeView('experience')}}>EXPERIENCE</button>
        <button className={this.props.view === 'about' ? 'nav-bold' : ''} onClick={() => {this.props.changeView('about')}}>ABOUT</button>
        <button className={this.props.view === 'other' ? 'nav-bold' : ''} onClick={() => {this.props.changeView('other')}}>NOTEBOOK</button>
      </div>
    )
  }





}