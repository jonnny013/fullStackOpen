import { useState } from "react";
import "./App.css";
import People from "./Components/People";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      return window.alert(`${newName} has already been added to the phonebook`)
    }
    const personObject = {
      name: newName,
      id: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNewPerson = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handleSearch = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setSearch(event.target.value.toLowerCase())
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Search: <input value={search} onChange={handleSearch} />
        </div>
      </form>
      
      <h2>Add number</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNewPerson} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().match(search))
          .map((x) => (
            <People key={x.id} person={x.name} number={x.number} />
          ))}
      </ul>
    </div>
  );
};

export default App;
