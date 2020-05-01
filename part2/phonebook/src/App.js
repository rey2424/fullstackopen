import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonFrom'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
 
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      
      <h3>add a new</h3>
      
      <PersonForm 
        newName={newName} 
        newNumber={newNumber}
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}   
       />
      
      <h3>Numbers</h3>      
      
      <Persons persons={persons} newFilter={newFilter} />      
    </div>
  )
}

export default App