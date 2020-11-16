// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, {useReducer} from 'react'
// function countReducer(previousCount, newCount) {
//   return previousCount + newCount
// }
function countReducer(previousCount, newCount) {
  return {...previousCount, ...newCount}
}
function Counter({initialCount = 0, step = 1}) {
  // const [count, setCount] = useReducer(countReducer, initialCount)
  //   const increment = () => setCount(step)
  const [state, setState] = useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
