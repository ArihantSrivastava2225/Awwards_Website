import { useState } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
