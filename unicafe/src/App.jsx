// // 1.6: unicafe step 1
// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   console.log("Good:", good)
//   console.log("Neutral:", neutral)
//   console.log("Bad:", bad)

//   return (
//     <div>
//       <div><h1>give feedback</h1></div>
//       <Button onClick={() => setGood(good + 1)} text="good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="bad" />
//         <div><h1>statistics</h1></div>
//         <div>
//             <p>good {good} <br />
//             neutral {neutral} <br />
//             bad {bad} </p>
//         </div>
//     </div>
//   )
// }

// // 1.7: unicafe step 2
// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   console.log("Good:", good)
//   console.log("Neutral:", neutral)
//   console.log("Bad:", bad)

//   // calculate new statistics
//   const total = good + neutral + bad
//   const average = total === 0 ? 0 : (good - bad) / total
//   const positivePercentage = total === 0 ? 0 : (good / total) * 100
//   // Average calculated by assigning a numerical value to each type of feedback to create a weighted average. 
//   // Thus, a "good" review as positive, a "neutral" review as having no effect, and a "bad" review as negative.
//   // Good feedback is assigned a value of +1, neutral a value of 0, and bad feedback a value of -1.
//   // average.toFixed(2). JS built-in function, formats a number to a fixed number of decimal places (2).

//   return (
//     <div>
//       <div><h1>give feedback</h1></div>
//       <Button onClick={() => setGood(good + 1)} text="good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="bad" />
//         <div><h1>statistics</h1></div>
//         <div>
//             <p>good {good} <br />
//             neutral {neutral} <br />
//             bad {bad} <br />
//             all {total} <br />
//             average {average.toFixed(2)} <br />
//             positive {positivePercentage.toFixed(2)} %</p> 
//         </div>
//     </div>
//   )
// }

// // 1.8: unicafe step 3
// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const Statistics = (props) => {
//   // Statistics component is 'stateless', in that it simply receives data and displays it. It doesn't manage its own state.
//   return (
//     <div>
//       <p>
//         good {props.good} <br />
//         neutral {props.neutral} <br />
//         bad {props.bad} <br />
//         all {props.total} <br />
//         average {props.average.toFixed(2)} <br />
//         positive {props.positivePercentage.toFixed(2)} %
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   console.log("Good:", good)
//   console.log("Neutral:", neutral)
//   console.log("Bad:", bad)

//   // calculate new statistics
//   const total = good + neutral + bad
//   const average = total === 0 ? 0 : (good - bad) / total
//   const positivePercentage = total === 0 ? 0 : (good / total) * 100
//   // Average calculated by assigning a numerical value to each type of feedback to create a weighted average. 
//   // Thus, a "good" review as positive, a "neutral" review as having no effect, and a "bad" review as negative.
//   // Good feedback is assigned a value of +1, neutral a value of 0, and bad feedback a value of -1.
//   // average.toFixed(2). JS built-in function, formats a number to a fixed number of decimal places (2).

//   return (
//     <div>
//       <div><h1>give feedback</h1></div>
//       <Button onClick={() => setGood(good + 1)} text="good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="bad" />
//       <div><h1>statistics</h1></div>
//       <Statistics
//         good = {good}
//         neutral = {neutral}
//         bad = {bad}
//         total = {total}
//         average = {average}
//         positivePercentage = {positivePercentage}
//         /> 
//         </div>
//   )
// }

// // 1.9: unicafe step 4
// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const Statistics = (props) => {
//   // Statistics component is 'stateless', in that it simply receives data and displays it. It doesn't manage its own state.
//   return (
//     <div>
//       <p>
//         good {props.good} <br />
//         neutral {props.neutral} <br />
//         bad {props.bad} <br />
//         all {props.total} <br />
//         average {props.average.toFixed(2)} <br />
//         positive {props.positivePercentage.toFixed(2)} %
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   console.log("Good:", good)
//   console.log("Neutral:", neutral)
//   console.log("Bad:", bad)

//   // calculate new statistics
//   const total = good + neutral + bad
//   const average = total === 0 ? 0 : (good - bad) / total
//   const positivePercentage = total === 0 ? 0 : (good / total) * 100
//   // Average calculated by assigning a numerical value to each type of feedback to create a weighted average. 
//   // Thus, a "good" review as positive, a "neutral" review as having no effect, and a "bad" review as negative.
//   // Good feedback is assigned a value of +1, neutral a value of 0, and bad feedback a value of -1.
//   // average.toFixed(2). JS built-in function, formats a number to a fixed number of decimal places (2).

//   return (
//     <div>
//       <div><h1>give feedback</h1></div>
//       <Button onClick={() => setGood(good + 1)} text="good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="bad" />
//       <div><h1>statistics</h1></div>
//       {total > 0 ? (
//         // Ternary Operator to handle if/else
//         // if total > 0
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           average={average}
//           positivePercentage={positivePercentage}
//         />
//         ) : (
//             // else
//           <p>No feedback given</p>
//           )}
//       </div>
//   )
// }

// // 1.10: unicafe step 5
// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )
// // StatisticLine is a 'stateless', 'presentational' component
// const StatisticLine = (props) => (
//   <>
//     {props.text} {props.value} <br />
//   </>
// )

// const Statistics = (props) => {
//   // Statistics component is 'stateless', in that it simply receives data and displays it. It doesn't manage its own state.
//   return (
//     <div>
//       <StatisticLine text="good" value={props.good} />
//       <StatisticLine text="neutral" value={props.neutral} />
//       <StatisticLine text="bad" value={props.bad} />
//       <StatisticLine text="all" value={props.total} />
//       <StatisticLine text="average" value={props.average.toFixed(2)} />
//       <StatisticLine text="positive" value={props.positivePercentage.toFixed(2) + ' %'} />
//     </div>
//   )
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   console.log("Good:", good)
//   console.log("Neutral:", neutral)
//   console.log("Bad:", bad)

//   // calculate new statistics
//   const total = good + neutral + bad
//   const average = total === 0 ? 0 : (good - bad) / total
//   const positivePercentage = total === 0 ? 0 : (good / total) * 100
//   // Average calculated by assigning a numerical value to each type of feedback to create a weighted average. 
//   // Thus, a "good" review as positive, a "neutral" review as having no effect, and a "bad" review as negative.
//   // Good feedback is assigned a value of +1, neutral a value of 0, and bad feedback a value of -1.
//   // average.toFixed(2). JS built-in function, formats a number to a fixed number of decimal places (2).

//   return (
//     <div>
//       <div><h1>give feedback</h1></div>
//       <Button onClick={() => setGood(good + 1)} text="good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="bad" />
//       <div><h1>statistics</h1></div>
//       {total > 0 ? (
//         // Ternary Operator to handle if/else
//         // if total > 0
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           average={average}
//           positivePercentage={positivePercentage}
//         />
//         ) : (
//             // else
//           <p>No feedback given</p>
//           )}
//       </div>
//   )
// }

// 1.11: unicafe step 6
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)
// StatisticLine is a 'stateless', 'presentational' component
const StatisticLine = (props) => (
  // Tabulate presentation using table-rows and table-data
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  // Statistics component is 'stateless', in that it simply receives data and displays it. It doesn't manage its own state.
  return (
    // Wrap the StatisticLine components within a table and table-body
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="average" value={props.average.toFixed(2)} />
        <StatisticLine text="positive" value={props.positivePercentage.toFixed(2) + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log("Good:", good)
  console.log("Neutral:", neutral)
  console.log("Bad:", bad)

  // calculate new statistics
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100
  // Average calculated by assigning a numerical value to each type of feedback to create a weighted average. 
  // Thus, a "good" review as positive, a "neutral" review as having no effect, and a "bad" review as negative.
  // Good feedback is assigned a value of +1, neutral a value of 0, and bad feedback a value of -1.
  // average.toFixed(2). JS built-in function, formats a number to a fixed number of decimal places (2).

  return (
    <div>
      <div><h1>give feedback</h1></div>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <div><h1>statistics</h1></div>
      {total > 0 ? (
        // Ternary Operator to handle if/else
        // if total > 0
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positivePercentage={positivePercentage}
        />
        ) : (
            // else
          <p>No feedback given</p>
          )}
      </div>
  )
}

export default App