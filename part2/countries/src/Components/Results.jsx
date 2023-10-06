import React from "react";
import { useEffect } from "react";

const Results = ({
  country,
  search,
  handleClick,
  setPlace,
  weather,
  weatherIsAvailable,
  apiIsLoading,
  description,
  fullResults,
  keyValue,
  handleKeyValue,
}) => {
  const results = country.filter((c) =>
    c.name.common.toLowerCase().match(search)
  );
  useEffect(() => {
    if (results.length === 1) {
      fullResults(results[0]);
    }
  }, [results]);
  return (
    <div>
      {apiIsLoading && <p>Loading, please wait...</p>}
      {description !== "" && (
        <div>
          {setPlace(description.capital.toString())}
          <h1>{description.name}</h1>
          <p>Capital: {description.capital}</p>
          <p>Area: {description.area}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.entries(description.languages).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
          <img src={description.flag} style={{ border: "1px solid black" }} />
          {weather ? (
            <div>
              <h2>Weather in {description.capital}</h2>
              <p>
                Current temperature: {(weather.main.temp - 273.15).toFixed(1)}ºC
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
              <p>Wind: {weather.wind.speed} m/s</p>
            </div>
          ) : !weatherIsAvailable ? (
            <div>
              <p>To access weather, please add a key.</p>
              <p>
                A free key is available from
                <a
                  href="https://home.openweathermap.org/api_keys"
                  target="_blank"
                >
                  {" "}
                  here.
                </a>
              </p>
              <form>
                Your key:
                <input value={keyValue} onChange={handleKeyValue} />
              </form>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
      {results.length >= 10 && description === "" && (
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

export default Results;
