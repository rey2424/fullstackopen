import React from 'react'
import personsService from '../services/persons'

const Persons = ({persons,newFilter, setPersons}) => {

    const handleDelete = (p) => {
        if (window.confirm(`Delete ${p.name} ?`)) {   
            
            
            personsService
            .del(p.id)
            .then(() => {
                setPersons(persons.filter(n => n.id !== p.id))
            })
           
            
          }
    }
    
    return(
        persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map(p => 
            <div key={p.name}>
                {p.name} {p.number}
                <button key={p.name} onClick={() => handleDelete(p)}>delete</button>
                
                </div>)  
    )
}

export default Persons