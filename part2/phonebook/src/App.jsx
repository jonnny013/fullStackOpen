import { useState } from 'react'
import './App.css'
import People from './Components/People';

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault()
      const personObject ={
        name: newName,
        id: persons.name
      }
      setPersons(persons.concat(personObject))
      setNewName('')
  }

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((x) => <People key={x.id} person={x.name} />)}
      </ul>
    </div>
  );
};

export default App;