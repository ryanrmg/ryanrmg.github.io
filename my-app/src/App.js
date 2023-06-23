import './App.css'
import Home from './components/Home'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <div className="Nav">
        <div id="pad-60"></div>
        <div id="links">
          <a href="/home">/</a>
          <a href="/blog">/blog</a>
          <a href="/data">/coursework</a>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;