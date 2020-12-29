import React from 'react'
import './styles/styles.scss'

import PartheanCommunity from './assets/images/parthean_community.png'
import DataPipeline from './assets/images/arl_data_pipeline.png'
import MinitabImage from './assets/images/minitab_image.png'

import 'react-vertical-timeline-component/style.min.css'

export default class Experience extends React.Component {

  render() {
    return (
      <div className="resume">
        <div className="work-element">
          <div className="left-element">
            <h2>TRANSFORM EDUCATION, PARTHEAN INC.</h2>
            <p>MAKE LEARNING A HABIT WITH VIRTUAL COMMUNITIES</p>
            <p>(FULL STACK DEVELOPMENT, REACT, HTML/CSS, DJANGO)</p>
          </div>
          <div className="right-element">
            <img className="experience-image" src={PartheanCommunity} alt="parthean"></img>
          </div>
        </div>
        <div className="work-element">
          <div className="left-element">
            <h2>END-TO-END DATA OPERATIONS, PENN STATE</h2>
            <p>ENABLE BIG DATA ANALYTICS ON AIRCRAFT INFORMATION</p>
            <p>(SQL, PYSPARK, PYTORCH, HADOOP)</p>
          </div>
          <div className="right-element">
            <div className="image-container">
              <img className="experience-image" id="data-pipeline" src={DataPipeline} alt="penn state"></img>
            </div>
          </div>
        </div>
        <div className="work-element">
          <div className="left-element">
            <h2>STATISTICAL IMPROVEMENT TOOLS, MINITAB INC</h2>
            <p>ENABLE CROSS PLATFORM ANALYTICS AND COLLABORATION</p>
            <p>(SWIFT, C++, C, UNIT TESTING)</p>
          </div>
          <div className="right-element">
            <div className="image-container">
              <img className="experience-image" id="data-pipeline" src={MinitabImage} alt="minitab"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div className="timeline">
  //       <div className="timeline-header">
  //         <div className="timeline-title">
  //           <h2>Experience</h2>
  //         </div>
  //       </div>

  //       <VerticalTimeline layout='1-column'>
  //         <VerticalTimelineElement
  //           className="vertical-timeline-element--work"
  //           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  //           date="2019 - present"
  //           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //         >
  //           <h3 className="vertical-timeline-element-title">Full Stack Developer [Parthean Inc.]</h3>
  //           <h4 className="vertical-timeline-element-subtitle">Pittsburgh, PA</h4>
  //           <p>
  //             Creative Direction, User Experience, Visual Design
  //           </p>
  //           <br></br>
  //           <a href="https://www.parthean.com" target="_blank" rel="noopener noreferrer">
  //             <img className="experience-image" src={PartheanCommunity} alt="parthean"></img>
  //           </a>
  //           <br></br>
  //           <div className="skill-tags">
  //             <span>React</span>
  //             <span>Django</span>
  //             <span>Sass</span>
  //             <span>HTML</span>
  //             <span>JavaScript</span>
  //           </div>
  //         </VerticalTimelineElement>

  //         <VerticalTimelineElement
  //           className="vertical-timeline-element--work"
  //           contentStyle={{ background: 'rgb(243, 167, 111)', color: '#fff' }}
  //           contentArrowStyle={{ borderRight: '7px solid  rgb(243, 167, 111)' }}
  //           date="2018 - present"
  //           iconStyle={{ background: 'rgb(243, 167, 111)', color: '#fff' }}
  //         >
  //           <h3 className="vertical-timeline-element-title">Reseach and Development Engineer [Penn State Applied Research Lab]</h3>
  //           <h4 className="vertical-timeline-element-subtitle">State College, PA</h4>
  //           <p>
  //             Data Ingestion & Analysis, Data Representation, Team Leader
  //           </p>
  //           <br></br>
  //           <div className="image-container">
  //             <img className="experience-image" id="data-pipeline" src={DataPipeline} alt="penn state"></img>
  //           </div>
  //           <br></br>
  //           <div className="skill-tags">
  //             <span>D3.js</span>
  //             <span>SQL</span>
  //             <span>PySpark</span>
  //             <span>Hadoop</span>
  //           </div>
  //         </VerticalTimelineElement>

  //         <VerticalTimelineElement
  //           className="vertical-timeline-element--work"
  //           contentStyle={{ background: 'rgb(180, 150, 243)', color: '#fff' }}
  //           contentArrowStyle={{ borderRight: '7px solid  rgb(180, 150, 243)' }}
  //           date="2017 - 2018"
  //           iconStyle={{ background: 'rgb(180, 150, 243)', color: '#fff' }}
  //         >
  //           <h3 className="vertical-timeline-element-title">Software Engineer Intern [Minitab Inc.]</h3>
  //           <h4 className="vertical-timeline-element-subtitle">State College, PA</h4>
  //           <p>
  //             Quality Analysis, Unit Testing, Cross-Platform Integration
  //           </p>
  //           <br></br>
  //           <div className="image-container">
  //             <a href="https://www.minitab.com/en-us/" target="_blank" rel="noopener noreferrer">
  //               <img className="experience-image" src={MinitabImage} alt="minitab"></img>
  //             </a>
  //           </div>
  //           <br></br>
  //           <div className="skill-tags">
  //             <span>Swift</span>
  //             <span>C</span>
  //             <span>C++</span>
  //             <span>Unit Tests</span>
  //           </div>
  //         </VerticalTimelineElement>

  //       </VerticalTimeline>
  //       <div className="timeline-header">
  //         <div className="timeline-title">
  //           <h2>Education</h2>
  //         </div>
  //       </div>
  //       <VerticalTimeline>
  //         <VerticalTimelineElement
  //           className="vertical-timeline-element--work"
  //           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  //           date="2019 - present"
  //           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //         >
  //           <h3 className="vertical-timeline-element-title">B.S. Electrical and Computer Engineering</h3>
  //           <h4 className="vertical-timeline-element-subtitle">Carnegie Mellon University  -  2018 - 2022</h4>
  //           <p>
  //             My main areas of interest and coursework include software developemnt, mathematics and machine learning.
  //           </p>
  //           <br></br>
  //         </VerticalTimelineElement>
  //       </VerticalTimeline>
  //       <div className="timeline-header">
  //         <div className="timeline-title">
  //           <h2>Skills</h2>
  //           <div className="skill-tags">
  //             <span>Machine Learning</span>
  //             <span>Binary Exploitation</span>
  //             <span>Decision Making</span>
  //             <span>Web Development</span>
  //             <span>Data Visualization</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

}
