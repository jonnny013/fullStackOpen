import React from 'react'

const Results = ({ country, search, handleClick, place, setPlace, weather }) => {
  const results = country.filter((c) =>
    c.name.common.toLowerCase().match(search)
  );
  return (
    <div>
      {results.length === 1 &&
        results.map((a) => (
          <div key={a.name.common.replace(" ", "-")}>
            {setPlace(a.capital.toString())}
            <h1>{a.name.common}</h1>
            <p>Capital: {a.capital}</p>
            <p>Area: {a.area}</p>
            <h3>Languages:</h3>
            <ul>
              {Object.entries(a.languages).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
            <img src={a.flags.png} />
            {weather ?
            <div>
            <h2>Weather in {a.capital}</h2>
            <p>Current temperature: {(weather.main.temp - 273.15).toFixed(1)} ºC</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>Wind: {weather.wind.speed} m/s</p> </div>
          : <p>Loading...</p>
          }
          </div>
        ))}
      {results.length >= 10 && (
        <p>Too many results, please be more specific...</p>
      )}
      {results.length < 10 &&
        results.length > 1 &&
        results.map((a) => (
          <div key={a.name.common.replace(" ", "-")}>
            <p>{a.name.common}</p>
            <button onClick={() => handleClick(a)}>Show</button>
          </div>
        ))}
      
    </div>
  );
};

export default Results