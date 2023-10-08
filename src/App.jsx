import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";

// main components

//header

//footer component

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
    <div className="App">
      <Header />
      <Main />
      <Footer />

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
  );
}

export default App;
