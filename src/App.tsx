import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
