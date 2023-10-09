import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";

import Exercise from "./components/Exercise";
import ExerciseManager from "./components/ExerciseManager";

// main components

//header

//footer component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/exercise" Component={Exercise}></Route>
        <Route path="/excerciseManager" Component={ExerciseManager}></Route>
      </Routes>
    </Router>
  );
}

export default App;
