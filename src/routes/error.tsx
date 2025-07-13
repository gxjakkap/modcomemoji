import modcomLogo from '/modexpress.svg'
import { isRouteErrorResponse, useRouteError } from 'react-router'

export default function Error() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <main className="flex h-screen flex-col justify-center bg-gray-100 p-4">
                <div className="flex justify-center pt-8 pb-4">
                    <img src={modcomLogo} alt="ModCom Express Logo" className="w-[150px] sm:w-[100px] xl:w-[200px]" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col text-center gap-y-3">
                        <h1 className="text-[4rem] sm:text-[6rem] font-bold text-center">{error.status}</h1>
                        <p className="text-base text-center">{error.statusText}</p>
                        <a href="/" className="text-base text-center underline">Go back home!</a>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="flex h-screen flex-col justify-center bg-gray-100 p-4">
            <div className="flex justify-center pt-8 pb-4">
                <img src={modcomLogo} alt="ModCom Express Logo" className="w-[150px] sm:w-[100px] xl:w-[200px]" />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-col text-center gap-y-3">
                    <h1 className="text-[8rem] sm:text-[10rem]">Err!</h1>
                    <p className="text-base text-center">OK this is embarrassing.</p>
                </div>
            </div>
        </main>
    )
}
