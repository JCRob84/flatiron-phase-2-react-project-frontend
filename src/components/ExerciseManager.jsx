import Header from "./Header";
import Form from "./Form";
import { useState, useEffect } from "react";

const ExerciseManager = () => {
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
};

export default ExerciseManager;
