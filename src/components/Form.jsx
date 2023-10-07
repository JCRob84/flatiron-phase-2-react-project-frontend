import React, { useState } from "react";

function Form({ addExercise }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, duration }),
    };

    fetch("http://localhost:3000/exercises", configObj)
      .then((res) => res.json())
      .then((data) => {
        addExercise(data);
        setName("");
        setDuration("");
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
        placeholder="Duration (seconds)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default Form;
