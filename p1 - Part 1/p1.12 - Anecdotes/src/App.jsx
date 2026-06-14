import { useState } from 'react'


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

const RandomButton = ({setSelected, max}) => {
    return (
    <button onClick={() => setSelected(getRandomInt(max))}>next anecdote</button>
    )
}

function incrementSet(values, setValues, max, setMax, index) {
  const copy = [...values]
  copy[index] += 1

  setValues(copy)
  setMaxIndex(copy, max, setMax)
}

const VoteButton = ({votes, selected, setVotes, max, setMax}) => {
  return (
    <button onClick={() => {votes = incrementSet(votes, setVotes, max, setMax, selected)}}>vote</button>
    )
  }

function setMaxIndex(array, max, setMax) {
  
  var maxIndex = max[0]
  var maxValue = max[1]

  for (const [index, element] of array.entries()) {
    if (element > maxValue) {
      maxIndex = index
      maxValue = element
    }
  }

  if (maxIndex == max[0]) {
    return maxIndex
  }

  setMax([maxIndex, maxValue])

}

const BestAnecdote = ({votes, anecdotes, max, setMax}) => {
    return (
    <>
      <h1>Best Anecdote</h1>
      <p>{anecdotes[max[0]]}</p>
    </>
  )
  }

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

  const [votes, setVotes] = useState(Array.from({length: anecdotes.length}, (v, i) => 0))
  const [selected, setSelected] = useState(0)
  const [max, setMax] = useState([0,0])
  console.log(max)
  console.log(votes)

  return (
    <div>
      {anecdotes[selected]}
      <div>
      <VoteButton votes={votes} selected={selected} setVotes={setVotes} max={max} setMax={setMax}/>
      <RandomButton setSelected={setSelected} max={anecdotes.length}/>
      <BestAnecdote votes={votes} anecdotes={anecdotes} max={max} setMax={setMax} />
      </div>
    </div>
  )
}

export default App