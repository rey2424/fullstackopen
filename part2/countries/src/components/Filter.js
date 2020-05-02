import React from 'react'

const Filter = ({countries, setNewCountry}) => {
    
  
  const handleCountry = (e) => {
    let arr = [];

    countries.forEach(function(c) {
      if (c.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        arr.push(c);
      }
    });

    setNewCountry(arr);
}

  return( 
  <div>
    find countries<input  onChange={handleCountry} />
  </div>)
}

export default Filter