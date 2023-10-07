import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Form from "./components/Form";

// main components
import Main from "./components/Main";
//header
import Header from "./components/Header";
//footer component
import Footer from "./components/Footer";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/exercises")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  function addExercise(newExercise) {
    setExercises([...exercises, newExercise]);
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="App">
        <h1>Exercise List</h1>
        <Form addExercise={addExercise} />
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              {exercise.name} (Duration: {exercise.duration} seconds)
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
