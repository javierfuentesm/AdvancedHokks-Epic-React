// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React, {useState, createContext} from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = createContext()
const CountProvider = ({children}) => {
  const [count, setCount] = useState(0)

  const value = {
    count,
    setCount,
  }
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const {count} = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const {setCount} = React.useContext(CountContext)

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default App
