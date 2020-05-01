import React from 'react'

const PersonForm = ({newName, newNumber, persons, setPersons, setNewName, setNewNumber}) => {
    
  const addPerson = (e) => {
    e.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    }    
    if(persons.some(p => p.name.toLowerCase()=== newName.toLowerCase()))
    { alert(`${newName} is already added to the phonebook`)    } 
    else {
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
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