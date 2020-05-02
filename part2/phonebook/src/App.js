import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonFrom'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
        .then(p => {
          setPersons(p)          
        })

  },[])
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      
      <h3>add a new</h3>
      
      <PersonForm 
        setMessage={setMessage}
        newName={newName} 
        newNumber={newNumber}
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}   
       />
      
      <h3>Numbers</h3>      
      
      <Persons setPersons={setPersons} persons={persons} newFilter={newFilter} />      
    </div>
  )
}

export default App