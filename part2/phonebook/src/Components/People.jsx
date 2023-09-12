import React from 'react'

const People = (props) => {
  return (
    <>
      <ul>
        {props.persons
          .filter((person) => person.name.toLowerCase().match(props.search))
          .map((x) => (
            <li key={x.id}>
              {x.name} {x.number}
            </li>
          ))}
      </ul>
    </>
  );
}

export default People