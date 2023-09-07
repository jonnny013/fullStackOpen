import { useState } from "react";


const Button = (props) => {
  return <button onClick={() => props.setState(props.state + 1)}>{props.text}</button>;
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" state={good} setState={setGood} />
      <Button text="Neutral" state={neutral} setState={setNeutral} />
      <Button text="Bad" state={bad} setState={setBad} />
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default App;
