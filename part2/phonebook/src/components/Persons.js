import React from 'react'

const Persons = ({persons,newFilter}) => {
    
    return(
        persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map(p => <div key={p.name}>{p.name} {p.number}</div>)  
    )
}

export default Persons