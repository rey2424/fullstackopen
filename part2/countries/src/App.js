import React, {useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import Display from './components/Display'

function App() {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState([])   

  useEffect(()=> {
    axios
      .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data)
        })
  },[])
  
  return (
    <div>
      <Filter countries={countries} setNewCountry={setNewCountry}/>
      <Display newCountry={newCountry} setNewCountry={setNewCountry} />
    </div>
  )

}

export default App;
