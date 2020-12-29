import React from 'react'
import './styles/styles.scss'
import pic from './assets/images/aiguilledumidi.JPG'

export default class About extends React.Component {

  render() {
    return (
      <>
        <div className="split">
          <div className="left-head">
            <img id="me" src={pic} alt="me"></img>
          </div>
          <div className="right-head">
            <h1 id="title">RYAN GESS</h1>
            <p>I like exploring <strong>data</strong> and interaction, encouraging the conversation of data analytics and information design to make 
              well informed decisions.
            </p>
            <p>
            Last summer, I interned at Penn State, making sense of flight data by enabling quick answers to complicated queries.
            I've also worked at <a href="https://www.parthean.com/">Parthean</a>, creating software to transform online education and connect students from all over the world.
            In general, I like making cool tools that are hopefully useful. 
            </p>
            <p>
            I study Electrical and Computer Engineering and Machine Learning at <a href="https://www.cmu.edu/">Carnegie Mellon University</a>. I've been a mentor, a captain, a traveler, 
            a skiier, a photographer, and a chef. I make an impact on the communities of which I am invovled. 
            </p>
          </div>
        </div>
      </>
    )
  }
}