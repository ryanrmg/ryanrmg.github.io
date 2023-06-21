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
        <a href="/home">Home</a>
        <a href="/blog">Blog</a>
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