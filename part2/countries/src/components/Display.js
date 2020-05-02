import React from 'react'
import Country from './Country'

const Display = ({setNewCountry, newCountry}) => {
   
      
    if(newCountry.length > 1 && newCountry.length <= 10) 
    {         
        return  (
          <div>
            {newCountry.map(c => (
              <div key={c.name}>
                {c.name} 
                 <button onClick={() => setNewCountry([c])} 
                 key={c.name}>show</button>
              </div>
            ))}
          </div>
        )
    }
    else if (newCountry.length === 1) {
      return <Country c={newCountry[0]} />
    }
    else if(newCountry.length > 10){      
        return <div>Too many matches, specify another filter</div>
      
    }
    else {
      return <div></div>
    }
  
  

}

export default Display