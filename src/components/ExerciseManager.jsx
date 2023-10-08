import Header from "./Header";
import Form from "./Form";
import { useState, useEffect } from "react";

const ExerciseManager = () => {
  const [exercises, setExercises] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/exercises")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed.");
        }
        return res.json();
      })
      .then((data) => setExercises(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addExercise(newExercise) {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
    setConfirmationMessage("Exercise added successfully!");
    // Limpia el mensaje de confirmación después de unos segundos
    setTimeout(() => {
      setConfirmationMessage("");
    }, 3000); // Mostrar el mensaje durante 3 segundos
  }

  function handleDeleteExercise(exerciseId) {
    // Realiza una solicitud para eliminar el ejercicio en el servidor
    // Por ejemplo, puedes hacer algo como esto:
    fetch(`http://localhost:3000/exercises/${exerciseId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete exercise.");
        }
        // Elimina el ejercicio de la lista en el estado local
        setExercises((prevExercises) =>
          prevExercises.filter((exercise) => exercise.id !== exerciseId)
        );
      })
      .catch((error) => {
        console.error(error);
        // Puedes mostrar un mensaje de error o realizar acciones adicionales aquí
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
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} (Duration: {exercise.duration} seconds)
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
