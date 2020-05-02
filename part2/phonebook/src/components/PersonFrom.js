import React from 'react'
import personsService from '../services/persons'

const PersonForm = ({newName, newNumber, persons, setPersons, setNewName, setNewNumber}) => {
    
  const addPerson = (e) => {
    e.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    } 
      
    if(persons.some(p => p.name.toLowerCase() === newName.toLowerCase()))
    { 
      const personUpdate = persons.filter(p => p.name.toLowerCase() === newName.toLowerCase())
      
      if (window.confirm(`${newName} is already added to the phonebook, 
      replace the old number with a new one?`)) {  
        personsService
          .update(personUpdate[0].id, nameObj)
          .then(retP => {
            setPersons(persons.map(p => p.id === personUpdate[0].id ? retP : p))
            setNewName('')
            setNewNumber('')
          })
         } 
       
        } else{
    personsService
      .create(nameObj)
      .then(retP => {
        setPersons(persons.concat(retP))
        setNewName('')
        setNewNumber('')
        })  }

    }
    
  
  const addName = (e) => {
    setNewName(e.target.value)
  }

  const addNumber = (e) => {
    setNewNumber(e.target.value)
  }


    return (
        <form>
        <div>
          name: <input value={newName} onChange={addName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={addNumber} />
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form>
    )
} 

export default PersonForm