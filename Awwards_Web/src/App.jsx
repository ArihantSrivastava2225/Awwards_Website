import { useState } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  )
}

export default App
