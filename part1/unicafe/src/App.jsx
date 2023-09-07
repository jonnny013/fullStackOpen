import { useState } from "react";


const Button = (props) => {
  return <button onClick={() => props.setState(props.state + 1)}>{props.text}</button>;
}

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
const total = good + neutral + bad;
const average = (good - bad) / total;
const positive = (good / total) * 100 + "%";
return (
  <>
    <h2>Statistics</h2>
    {total === 0 ? (
      <p>No feedback given</p>
    ) : (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}</p>{" "}
      </>
    )}
  </>
);
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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
