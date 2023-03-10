import { Routes, Route, Navigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from "./components/HomePage/HomePage";
import ExperiencePage from "./components/ExperiencePage/ExperiencePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/experience" element={<ExperiencePage/>} />
      </Routes>
    </div>
  );
}

export default App;
