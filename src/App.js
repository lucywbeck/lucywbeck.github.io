import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from "./components/HomePage/HomePage";
import PhotoEditor from "./components/PhotoEditor/PhotoEditor";
import Froggo from "./components/Froggo/Froggo";
import Aha from "./components/Aha/Aha";
import Cwf from "./components/Cwf/Cwf";
import NUProjects from "./components/NUProjects/NUProjects";
import Squirrel from "./components/Squirrel/Squirrel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/photoeditor" element={<PhotoEditor/>} />
        <Route exact path="/froggo" element={<Froggo/>} />
        <Route exact path="/aha" element={<Aha/>} />
        <Route exact path="/cwf" element={<Cwf/>} />
        <Route exact path="/nuprojects" element={<NUProjects/>} />
        <Route exact path="/squirrel" element={<Squirrel/>} />
      </Routes>
    </div>
  );
}

export default App;
