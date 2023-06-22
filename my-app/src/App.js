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
        <div style={{width: "60%"}}></div>
        <div style={{width: "40%", display: "flex", justifyContent: "space-evenly"}}>
          <a href="/home">home</a>
          <a href="/blog">blog</a>
          <a href="/data">data</a>
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