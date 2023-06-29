import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Blog from './components/Blog'

import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <div className="Nav">
        <div id="pad-60"></div>
        <div id="links">
          <a href="/">/</a>
          <a href="/blog">/blog</a>
          <a href="/projects">/projects</a>
          <a href="/coursework">/coursework</a>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/coursework" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;