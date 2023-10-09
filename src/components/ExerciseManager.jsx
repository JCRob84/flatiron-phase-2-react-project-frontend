import Header from "./Header";
import Form from "./Form";
import { useState, useEffect } from "react";

const ExerciseManager = () => {
  const [exercises, setExercises] = useState({
    aerobicExercises: [],
    strengthTrainingExercises: [],
    flexibilityExercises: [],
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3031/exercises")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed.");
        }
        return res.json();
      })
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addExercise(newExercise) {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
    setConfirmationMessage("Exercise added successfully!");

    setTimeout(() => {
      setConfirmationMessage("");
    }, 3000);
  }

  function handleDeleteExercise(exerciseId) {
    fetch(`http://localhost:3031/exercises/${exerciseId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete exercise.");
        }

        setExercises((prevExercises) =>
          prevExercises.filter((exercise) => exercise.id !== exerciseId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <Header />
      <h1>Exercise List</h1>
      <Form addExercise={addExercise} />
      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
      <ul>
        {exercises.aerobicExercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} (Duration: {exercise.duration} seconds)
            <button onClick={() => handleDeleteExercise(exercise.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {exercises.strengthTrainingExercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} (Repetitions: {exercise.repetitions}, Sets:{" "}
            {exercise.sets} )
            <button onClick={() => handleDeleteExercise(exercise.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {exercises.flexibilityExercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} (Type: {exercise.type})
            <button onClick={() => handleDeleteExercise(exercise.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseManager;
