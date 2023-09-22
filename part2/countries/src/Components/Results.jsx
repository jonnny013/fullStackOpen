import React from 'react'

const Results = ({country, search}) => {

    const results = country.filter(c => c.name.common.toLowerCase().match(search))
  return (
    <div>
      {results.length === 1 &&
        results.map((a) => (
          <div key={a.name.common.replace(" ", "-")}>
            <h1>{a.name.common}</h1>
            <p>Capital: {a.capital}</p>
            <p>Area: {a.area}</p>
            <h3>Languages:</h3>
            <ul>{Object.entries(a.languages).map(([key, value]) => <li key={key}>{value}</li>)}</ul> 
            <img src={a.flags.png} />
          </div>
        ))}
      {results.length >= 10 && (
        <p>Too many results, please be more specific...</p>
      )}
      {results.length < 10 &&
        results.length > 1 &&
        results.map((a) => (
          <li key={a.name.common.replace(" ", "-")}>{a.name.common}</li>
        ))}
    </div>
  );
}

export default Results