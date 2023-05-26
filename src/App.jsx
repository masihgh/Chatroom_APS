import { useState } from 'react'
import Chatroom from './pages/Chatroom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Chatroom />
    </>
  )
}

export default App
