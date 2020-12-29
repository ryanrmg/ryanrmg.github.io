import React from 'react'
import './styles/styles.scss'

// var Latex = require('react-latex')
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Risk from './notebook-pages/Risk'
export default class Other extends React.Component {
  render() {
    return (
      <div className='notebook'>
        <h1>NOTEBOOK</h1>
        <Router>
        <div className='navbar'>
          <nav>
            <ul>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
              <li>
                <Link to="/2020">2020</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/2020">
              <Risk />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>

    )
  }
}

        //  <div className="post">
        //     <button className="title collapsible">
        //       OPTIMAL INVESTMENT
        //     </button>
        //     <div className="post-content">
        //       <p>
        //         Any investment that has the possibility of <span className="bold-italics">increasing</span> value
        //         must also have the possibility of <span className="bold-italics">decreasing</span> value. This is
        //         called <span className="bold-italics">risk</span>. Risk is super fascinating.<br></br>
        //         <br></br>
        //         <div className="center-content">
        //           Consider a scenerio:<br></br>
        //           1. I flip a fair coin, regardless of the outcome, you recieve $1,000,000<br></br>
        //           2. I flip a fair coin, if it's heads, you get $2,000,000, if its tails you get nothing
        //         </div>
        //         In either case, your expected value is the same, <Latex>E[X] = $1,000,000.</Latex>
        //         <br></br>
        //         Typically, most investors are risk averse and will take option 1.
        //       </p>
        //     </div>
        // </div>
