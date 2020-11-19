// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React, {useState, useContext, createContext} from 'react'

const CountContext = createContext()
const CountProvider = ({children}) => {
  const [count, setCount] = useState(0)

  const value = {
    count,
    setCount,
  }
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

const useCount = () => {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be rendered within the CounterProvider')
  }
  return context
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  // const {count} = React.useContext(CountContext)
  const {count} = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  // const {setCount} = React.useContext(CountContext)
  const {setCount} = useCount()

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
