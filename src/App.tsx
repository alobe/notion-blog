import React, { useEffect } from 'react'
import { useLottie } from 'lottie-react'
import groovyWalk from './animation/groovyWalk.json'
import logo from './logo.svg'
import { proxy, useSnapshot } from 'valtio';

const state = proxy({
  count: 10000
})

function App() {
  const snap = useSnapshot(state)
  const L = useLottie({animationData: groovyWalk, loop: true, autoplay: true});

  useEffect(() => {
    setTimeout(() => state.count++, 600)
  }, [L])

  return (
    <div className="flex h-screen w-screen items-center">
      <div className="w-1/4">
        {L.View}
      </div>
      <div className="ml-5 rounded-lg p-4 bg-green-500/70 overflow-hidden flex items-center justify-center transition-all duration-500">
        <h3 className="text-3xl text-yellow-600">{snap.count.toLocaleString('en')}</h3>
      </div>
    </div>
  )
}

export default App
