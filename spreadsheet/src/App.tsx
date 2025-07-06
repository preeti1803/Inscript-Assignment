import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Tabs from './components/StatusBadge' 
import ActionToolbar from './components/Toolbar'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
    <Header />
    <ActionToolbar />
      <h1 className='text-blue-500'>Hello World</h1>
      <Tabs />

    </>
  )
}

export default App
