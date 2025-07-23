
import { useEffect, useState } from 'react'

import modcomLogo from '/modexpress.svg'
import { emojiSet } from '../const'

export default function Home() {
  
  const [emojiArr, setEmojiArr] = useState<string[]>([])

  useEffect(() => {
    const newEmojiArr: string[] = []
    for (let i = 0; i < 5; i++){
      const newEmoji = emojiSet[Math.floor(Math.random() * emojiSet.length)]
      if (newEmojiArr.includes(newEmoji)) i--
      else newEmojiArr.push(newEmoji)
    }
    setEmojiArr(newEmojiArr)
  }, [])

  return (
    <main className="flex h-screen flex-col justify-center bg-gray-100 p-4">
      <div className="flex justify-center pt-8 pb-4">
        <img src={modcomLogo} alt="ModCom Express Logo" className="w-[150px] sm:w-[100px] xl:w-[200px]" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* <div className="text-[8rem] sm:text-[10rem] select-none">{emojiArr}</div> */}
        <div className="flex flex-col flex-wrap justify-center gap-x-12 md:flex-row">
          {emojiArr.map((emoji, index) => (
            <div key={index} className="text-[8rem] select-none">
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
