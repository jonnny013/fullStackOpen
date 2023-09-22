import React from 'react'

const Results = ({country, search, handleClick, show}) => {

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
            <ul>
              {Object.entries(a.languages).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
            <img src={a.flags.png} />
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
            <button onClick={handleClick}>Show</button>
            {show && <p>hello</p>}
          </div>
        ))}
    </div>
  );
}

export default Results