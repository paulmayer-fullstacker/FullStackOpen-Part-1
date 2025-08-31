import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleRandomClick = () => {
    // Math.random(): returns a floating-point pseudo-random number from 0 (inclusive) up to 1 (exclusive).
    // * anecdotes.length: Multiply random number by length of the anecdotes array.
    // Math.floor(): Round the result down to the nearest whole number
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVoteClick = () => {
    // Create a copy of the votes array to avoid direct mutation
    const newVotes = [...votes] // Unpack (spread) all the elements from the votes array, and put into a new array
    // Increment the vote count for the currently selected anecdote
    newVotes[selected] += 1
    // Update the state with the new votes array
    setVotes(newVotes)
  }
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  // new Array(anecdotes.length).fill(0): Create new array same length as the anecdotes array. Filled with zeros.
  // useState(...): The entire expression 'new Array(anecdotes.length).fill(0)' is the initial state passed to the useState hook. 
  
  // Find the index of the anecdote with the most votes
  const mostVotesIndex = votes.indexOf(Math.max(...votes)) // In case of a tie. Return index of the first element with maximum votes value.
  const mostVotesCount = votes[mostVotesIndex]

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <Button onClick={handleVoteClick} text="vote" />
        <Button onClick={handleRandomClick} text="next anecdote" />
      </div>

       <div>
        <h2>Anecdote with most votes</h2>
        {mostVotesCount > 0 ? (
          // if mostVotesCount > 0
          <>
            <div>{anecdotes[mostVotesIndex]}</div>
            <div>has {mostVotesCount} votes</div>
          </>
        ) : (
          // else:
          <div>No votes have been cast yet.</div>
        )}
      </div>
    </>
  )
}

export default App
