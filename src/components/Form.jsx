import React, { useState } from "react";

function Form({ addExercise }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter a valid exercise name.");
      return;
    }

    if (!duration || isNaN(duration) || duration <= 0) {
      alert("Please enter a valid exercise duration.");
    }

    const exerciseData = {
      name,
      duration: parseFloat(duration),
    };

    const configObj = {
      method: "GET",
    };

    fetch("http://localhost:3031/aerobicExercises", configObj)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed.");
        }
        return res.json();
      })
      .then((data) => {
        addExercise(data);
        setName("");
        setDuration("");
      })
      .catch((error) => {
        alert(
          "There was a problem adding the exercise. Please try again later."
        );
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default Form;
