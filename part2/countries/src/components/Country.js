import React, {useEffect, useState} from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY


const Country = ({c} ) => {

const [weather, setWeather] = useState(null)
    
useEffect(()=> {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${c.capital}`)
        .then(response => {
          setWeather(response.data)
        })
  },[c.capital])

  if(weather==null){    
    return (
        <div>
              <h2>{c.name}</h2>
              <div>capital {c.capital}</div>
              <div>population {c.population}</div>
              <h3>languages</h3>
              <ul>
                {c.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
              </ul>
              <img height={100} width={100} alt="flag" src={c.flag} />
                            
          </div>)}
    else{
        return (
            <div>
                  <h2>{c.name}</h2>
                  <div>capital {c.capital}</div>
                  <div>population {c.population}</div>
                  <h3>languages</h3>
                  <ul>
                    {c.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
                  </ul>
                  <img height={100} width={100} alt="flag" src={c.flag} />
                  <h3>Weather in {c.capital}</h3> 
                  <div><b>temperature:</b> {weather.current.temperature} Celcius</div>
                  <div><img alt="weather" src={weather.current.weather_icons[0]}/></div>
                  <b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
              </div>)
    }
}




export default Country