import React from 'react'

const Filter = ({newFilter, setNewFilter}) => {

    const addFilter = (e) => {
        setNewFilter(e.target.value)  
        }
        
    return (
        <div>
            filter shown with 
            <input 
            value={newFilter} 
            onChange={addFilter}/>
        </div>
    )
} 

export default Filter