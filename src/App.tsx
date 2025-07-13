
import { useEffect, useState } from 'react'
import modcomLogo from '/modexpress.svg'
import { emojiSet } from './const'

function App() {
  
  const [emoji, setEmoji] = useState('-')

  useEffect(() => {
    setEmoji(emojiSet[Math.floor(Math.random() * emojiSet.length)])
  }, [])

  return (
    <main className="flex h-screen flex-col justify-center bg-gray-100 p-4">
      <div className="flex justify-center pt-8 pb-4">
        <img src={modcomLogo} alt="ModExpress Logo" className="w-[150px] sm:w-[100px]" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-[8rem] sm:text-[10rem] select-none">{emoji}</div>
      </div>
    </main>
  )
}

export default App
