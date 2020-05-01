import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonFrom'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)          
        })

  },[])
 
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