
import { useEffect, useState } from 'react'

import modcomLogo from '/modexpress.svg'
import { emojiSet } from '../const'

export default function Home() {
  
  const [emoji, setEmoji] = useState('-')

  useEffect(() => {
    setEmoji(emojiSet[Math.floor(Math.random() * emojiSet.length)])
  }, [])

  return (
    <main className="flex h-screen flex-col justify-center bg-gray-100 p-4">
      <div className="flex justify-center pt-8 pb-4">
        <img src={modcomLogo} alt="ModCom Express Logo" className="w-[150px] sm:w-[100px] xl:w-[200px]" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-[8rem] sm:text-[10rem] select-none">{emoji}</div>
      </div>
    </main>
  )
}
