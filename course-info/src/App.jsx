// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// // const App = () => {
// //   const course = 'Half Stack application development'
// //   const part1 = 'Fundamentals of React'
// //   const exercises1 = 10
// //   const part2 = 'Using props to pass data'
// //   const exercises2 = 7
// //   const part3 = 'State of a component'
// //   const exercises3 = 14

// //   return (
// //     <div>
// //       <h1>{course}</h1>
// //       <p>
// //         {part1} {exercises1}
// //       </p>
// //       <p>
// //         {part2} {exercises2}
// //       </p>
// //       <p>
// //         {part3} {exercises3}
// //       </p>
// //       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
// //     </div>
// //   )
// // }

// // export default App


// const Header = (props) => {
//   console.log(props)
//   return (
//     <h1>{props.course}</h1>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.name} {props.exercises}
//     </p>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       {/* <p>
//         {props.part1.name} {props.part1.exercises}
//       </p>
//       <p>
//         {props.part2.name} {props.part2.exercises}
//       </p>
//       <p>
//         {props.part3.name} {props.part3.exercises}
//       </p> */}
//       <Part name={props.part1.name} exercises={props.part1.exercises} />
//       <Part name={props.part2.name} exercises={props.part2.exercises} />
//       <Part name={props.part3.name} exercises={props.part3.exercises} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.total}</p>
//   );
// };

// const App = () => {
//   const course = 'Half Stack application development';
//   // const part1 = {
//   //   name: 'Fundamentals of React',
//   //   exercises: 10
//   // };
//   // const part2 = {
//   //   name: 'Using props to pass data',
//   //   exercises: 7
//   // };
//   // const part3 = {
//   //   name: 'State of a component',
//   //   exercises: 14
//   // };
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
  

//   return (
//     <>
//       <Header course={course} />
//       <Content 
//         part1={parts[0]} part2={parts[1]} part3={parts[2]} 
//       />
//       <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
//     </>
//   );
// };

// export default App;

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  // Manually render each part by accessing its index in the array.
  return (
    <div>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;