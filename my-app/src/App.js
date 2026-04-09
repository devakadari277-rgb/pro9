import React, { useState, useRef } from "react";

function App() {

  // Controlled Form State
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Uncontrolled Form Ref
  const nameRef = useRef();

  // Controlled Submit
  const handleControlledSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setError("Name is required");
    } else {
      setError("");
      alert("Controlled Submitted: " + name);
    }
  };

  // Uncontrolled Submit
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();

    const uname = nameRef.current.value;

    if (uname === "") {
      alert("Name is required");
    } else {
      alert("Uncontrolled Submitted: " + uname);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Forms</h1>

      {/* Controlled Form */}
      <h2>Controlled Form</h2>
      <form onSubmit={handleControlledSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* Uncontrolled Form */}
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleUncontrolledSubmit}>
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter name"
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;