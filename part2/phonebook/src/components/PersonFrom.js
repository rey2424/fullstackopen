import React from 'react'
import personsService from '../services/persons'

const PersonForm = ({setMessage, newName, newNumber, persons, setPersons, setNewName, setNewNumber}) => {
    
  const addPerson = (e) => {
    e.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    } 
      
    if(persons.some(p => p.name.toLowerCase() === newName.toLowerCase()))
    { 
      const personUpdate = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
      
      if (window.confirm(`${newName} is already added to the phonebook, 
      replace the old number with a new one?`)) {  
        personsService
          .update(personUpdate.id, nameObj)
          .then(retP => {
            setPersons(persons.map(p => p.id === personUpdate.id ? retP : p))
            setNewName('')
            setNewNumber('')

          })
          .catch(error => {
            setMessage(
              `Information of ${personUpdate.name} has already been removed from server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)   
          })
         } 
       
        } else{
    personsService
      .create(nameObj)
      .then(retP => {
        setPersons(persons.concat(retP))
        setNewName('')
        setNewNumber('')

        setMessage(
          `Added ${nameObj.name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 2000) 
        })  

      
      }

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