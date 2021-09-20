import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {

  const [ showDetail, setShowDetail ] = useState(false)

  const handleClick = () => {
    if(showDetail) {
      setShowDetail(false)
    } else {
      setShowDetail(true)
    }
  }

  if(showDetail) {
    return (
      <div>
        <Detail country={country} />
        <button onClick={handleClick}>Hide</button>
      </div>
    )
  }

  return (
    <p>
      {country.name}
      <button onClick={handleClick}>Show</button>
    </p>
  )
}


const Detail = ({ country }) => (
  <div>
    <h2>{country.name}</h2>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <h3>Languages:</h3>
    <ul>
      {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
    </ul>
    <img src={country.flag} alt='flag' style={{'width': '200px'}} />
  </div>
)

const Content = ({ countries, filter }) => {
  const matches = countries.filter( 
    country => country.name.toLowerCase().startsWith(filter.toLowerCase())
  )
  
  if (filter.length === 0) {
    return <p>Enter a country in the text field above to get started!</p>
  } else if(matches.length > 10) {
    return <p>Too many results. Please narrow your search criteria!</p>
  } else if (matches.length === 1) {
    return <Detail country={matches[0]} />
  }

  return (
    <div>
      {matches.map(country => <Country key={country.name} country={country} />)}
    </div>
  )
}

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newCountry, setNewCountry ] = useState('')
  const handleCountryChange = (event) => setNewCountry(event.target.value)

  const hook = () => axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => setCountries(response.data))

  useEffect(hook, [])

  return (
    <div>
      <h2>Country Information</h2>
      Find a country: 
      <input
        value = {newCountry}
        onChange = {handleCountryChange} 
      />
    <Content countries={countries} filter={newCountry} />
    </div>
  );
}

export default App;