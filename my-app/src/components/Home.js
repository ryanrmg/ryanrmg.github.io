import '../App.css';
import me from '../img/me.png'

function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 id="hello">hi, i'm ryan.</h2>
          <img id="me" src={me}></img>
        </header>
        <div className="Content">
          <div className="Resume">
            <div className="Intro">
              <p>Thank you for visiting my website!</p>
              <a href="https://www.ece.cmu.edu/" target="_blank">
                <p>I am a recent graduate from Carnegie Mellon University. There I obtained my Masters and Bachelors degree in Electrical 
                and Computer Engineering.</p>
              </a>
              <p>
                My technical interests vary from embedded systems to data visualization. In addition, I have a strong affinity for Computer Security and Network Security.
              </p>
              <p>
                Outside of building software, I enjoy reading, teaching, and spending time outdoors. 
              </p>
            </div>
            <div className="Card">
              <header className="Card-header">
                <p>2022, Summer</p>
              </header>
              <div>
                <h3>Software Engineer, Raytheon Technologies</h3>
                <div>Developed an automated testing application for verifying system requirements using Java on C2BMC missile defense project.</div>
                <div>Implemented tests for new requirements and updated existing requirements to ensure version compatibility.</div>
                <div>Planned and built new Java/Maven application for aggregating test results on web app to provide historial verification context.</div>
                <div className="Skills">
                  <span className="Skill">Java</span>
                  <span className="Skill">HTML</span>
                </div>
              </div>
            </div>
            <div className="Card">
              <header className="Card-header">
                <p>2021, Summer</p>
              </header>
              <div>
                <h3>Software Engineer, Microsoft</h3>
                <div>Investigated methods for optimizing a Yocto build for embedded Linux operating system.</div>
                <div>Implemented and enabled ccache with Yocto build and analyzed performance gain, achieved 1.2x speedup.</div>
                <div>Designed new build pipeline for running unit tests in parallel to increase productivity and pull request turnaround time, achieved 25% speedup.</div>
                <div className="Skills">
                  <span className="Skill">Linux</span>
                  <span className="Skill">Yocto</span>
                  <span className="Skill">Python</span>
                  <span className="Skill">C</span>
                </div>
              </div>
            </div>
            <div className="Card">
              <header className="Card-header">
                <p>2020, Summer</p>
              </header>
              <div>
                <h3>Computer Vision Intern, Applied Research Laboratory (Pennsylvania State University)</h3>
                <div>Researched methods for generating point clouds from digital photos to obtain measurements to support underwater vessel construction.</div>
                <div>Headed a trade study for camera calibration and validation using Matlab and Python to simulate camera distortion and undistortion techniques.</div>
                <div className="Skills">
                  <span className="Skill">Python</span>
                  <span className="Skill">Matlab</span>
                </div>
              </div>
            </div>
            <div className="Card">
              <header className="Card-header">
                <p>2020</p>
              </header>
              <div>
                <h3>Full Stack Developer, Parthean</h3>
                <div>Built and styled an analytics page for educators of online learning platform using React, D3.js</div>
                <div>Integrated quantitative metrics to capture member engagement and community growth.</div>
                <div>Restructured data model to allow extensibility and improve performance and efficiency.</div>
                <div className="Skills">
                  <span className="Skill">D3.js</span>
                  <span className="Skill">React</span>
                  <span className="Skill">Django</span>
                </div>
              </div>
            </div>
            <div className="Card">
              <header className="Card-header">
                <p>2019, Summer</p>
              </header>
              <div>
                <h3>Machine Learning Intern, Applied Research Laboratory (Pennsylvania State University)</h3>
                <div>Engineered a big data pipeline to enable analytics on over 24 million aircraft positions per day using Spark and Hadoop</div>
                <div>Conducted machine learning research to predict relevant features of aircraft and maintain state of aircraft (on ground, in air, etc).</div>
                <div>Designed and implemented anomaly detection algorithms to flag and investigate anomalous data.</div>
                <div>Created geospatial visuals using D3.js to inform analysis and methods such as random forest regression and density-based clustering.</div>
                <div className="Skills">
                  <span className="Skill">PySpark</span>
                  <span className="Skill">D3.js</span>
                  <span className="Skill">Python</span>
                  <span className="Skill">NiFi</span>
                </div>
              </div>
            </div>
            <div className="Card">
              <header className="Card-header">
                <p>2018, Summer</p>
              </header>
              <div>
                <h3>Software Engineer Intern, Applied Research Laboratory (Pennsylvania State University)</h3>
                <div>Tested an interactive geospatial visual display web app with Selenium web browser automation and fixed bugs that were discovered.</div>
                <div>Optimized tests to run in parallel and configure on nightly build.</div>
                <div className="Skills">
                  <span className="Skill">Selenium</span>
                  <span className="Skill">Java</span>
                  <span className="Skill">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;