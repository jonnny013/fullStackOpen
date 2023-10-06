import React from "react";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";
import countryService from "./services/countries";
import { useEffect } from "react";
import Results from "./Components/Results";
const api_key = import.meta.env.VITE_SOME_KEY;
import axios from "axios";

const App = ({ countries }) => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [place, setPlace] = useState("");
  const [apiIsLoading, setApiIsLoading] = useState(true);
  const [weatherIsAvailable, setWeatherIsAvailable] = useState(true);
  const [detailedDescription, setDetailedDescription] = useState("");
  const [keyValue, setKeyValue] = useState("");

  const handleKeyValue = (event) => {
    event.preventDefault;
    setKeyValue(event.target.value);
  };

  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountry(response.data);
      setApiIsLoading(false);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${keyValue}`
      )
      .then((response) => setWeather(response.data))
      .catch((error) => {
        console.log("URL undefined, API key not installed");
        setWeatherIsAvailable(false);
      });
  }, [keyValue]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
    setDetailedDescription("");
  };

  const handleClick = (a) => {
    setSearch("");
    fullResults(a);
  };

  const fullResults = (countryResult) => {
    const countryResultInfo = {
      name: countryResult.name.common,
      capital: countryResult.capital,
      area: countryResult.area,
      languages: countryResult.languages,
      flag: countryResult.flags.png,
    };
    setDetailedDescription(countryResultInfo);
  };

  return (
    <div>
      <h1>Country Search</h1>
      <SearchBar search={search} handleSearch={handleSearch} />
      <Results
        search={search}
        country={country}
        handleClick={handleClick}
        place={place}
        setPlace={setPlace}
        weather={weather}
        apiIsLoading={apiIsLoading}
        weatherIsAvailable={weatherIsAvailable}
        description={detailedDescription}
        fullResults={fullResults}
        keyValue={keyValue}
        handleKeyValue={handleKeyValue}
      />
    </div>
  );
};

export default App;
