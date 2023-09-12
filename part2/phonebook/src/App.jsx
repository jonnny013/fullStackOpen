import { useState } from "react";
import "./App.css";
import People from "./Components/People";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "Arto Hellas" },
  ]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      return window.alert(`${newName} has already been added to the phonebook`)
    }
    const personObject = {
      name: newName,
      id: newName,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handleNewPerson = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNewPerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((x) => (
          <People key={x.id} person={x.name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
