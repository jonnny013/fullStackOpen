import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.setState(props.state + 1)}>
      {props.text}
    </button>
  );
};

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.info}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  const good = props.good;
  const bad = props.bad;
  const neutral = props.neutral;
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
          <table>
            <tbody>
              <StatisticLine text="Good: " info={good} />
              <StatisticLine text="Neutral: " info={neutral} />
              <StatisticLine text="Bad: " info={bad} />
              <StatisticLine text="Total: " info={total} />
              <StatisticLine text="Average: " info={average} />
              <StatisticLine text="Positive: " info={positive} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

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
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        setNeutral={setNeutral}
        setGood={setGood}
        setBad={setBad}
      />
    </div>
  );
};

export default App;
