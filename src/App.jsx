import { useState } from 'react'
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar/>
     <Hero/>
     <GlobalStyles/>

    </>
  )
}

export default App
