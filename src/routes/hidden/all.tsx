
import modcomLogo from '/modexpress.svg'
import { emojiSet } from '../../const'

export default function All() {

  return (
    <main className="flex min-h-screen flex-col justify-center bg-gray-100 p-4">
      <div className="flex justify-center pt-8 pb-4">
        <img src={modcomLogo} alt="ModCom Express Logo" className="w-[150px] sm:w-[100px] xl:w-[200px]" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-[4rem] sm:text-[6rem] select-none grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8 sm:gap-x-4">
          {emojiSet.map((emoji, index) => (
            <span key={index}>{emoji}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-4">
        <p className="text-center">Made by jakka in the spur of the moment.</p>
      </div>
    </main>
  )
}
