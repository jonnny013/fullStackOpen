import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const countries = [
  {
    id: 1,
    name: "Taiwan",
    population: "23,000,000",
    food: "rice",
  },
  {
    id: 2,
    name: "USA",
    population: "300,000,000",
    food: "hamburgers",
  },
  {
    id: 3,
    name: "Mexico",
    population: "Unknown",
    food: "Tacos",
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(

    <App countries={countries} />

)
