import tree from "../public/tree.png"
import tree2 from "../public/tree2.png"
import Gohome from "../public/button-go-home.png"
import background404 from "../public/background-error-404.png"

const Error404 = () => {
    return (
        <main className="w-full h-screen flex flex-row items-end lg:justify-end ">
            <div className="w-full h-5/6 flex flex-col items-center justify-center">
                <div className="w-5/6 lg:w-3/6 h-5/6 flex flex-col items-center">
                    <h2 className="font-oswald font-extrabold text-2xl lg:text-4xl xl:text-5xl text-pink-light">
                        THIS PAGE COULD NOT BE FOUND
                    </h2>
                    <div className="w-full h-2/3 flex flex-col items-center mt-6">
                        <img src={background404} alt="dragon-and-soldeir" className="h-full" />
                    </div>
                    <button className="w-auto flex">
                        <img src={Gohome} alt="button-start" className='w-20 lg:w-28 hover:opacity-60' />
                    </button>
                </div>
                <div className="flex flex-row justify-around w-full">
                    <img src={tree} alt="tree-other" className='w-20' />
                    <img src={tree2} alt="tree" className='w-20' />
                </div>
                <div className='bg-block w-full h-1/6' />
            </div>
        </main>
    )
}
export default Error404
