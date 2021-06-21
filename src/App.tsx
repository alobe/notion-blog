import React, { useState } from 'react'
import { useLottie } from 'lottie-react'
import groovyWalk from './animation/groovyWalk.json'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)
  const L = useLottie({animationData: groovyWalk, loop: true, autoplay: true});

  return (
    <div className="flex h-screen w-screen items-center">
      <div className="w-1/4">
        {L.View}
      </div>
    </div>
  )
}

export default App
