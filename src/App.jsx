import { useState } from 'react'
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar/>
     <GlobalStyles/>

    </>
  )
}

export default App
