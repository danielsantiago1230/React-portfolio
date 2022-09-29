import tree from '../public/tree.png'
import tree2 from '../public/tree2.png'
import start from '../public/button-start.png'
const Home = () => {
  return (
    <main className="w-full h-screen flex flex-row items-end justify-end">
      <div className="lg:w-full h-5/6 flex flex-col items-center justify-center">
        <div className="w-5/6 lg:w-3/6 h-5/6 flex flex-col items-start">
          <div className="bg-pink-light h-2 w-2/6 lg:w-1/6" />
          <h1 className="font-oswald font-extrabold text-2xl lg:text-4xl xl:text-5xl text-blue-light">
            I'M  SANTIAGO QUINTERO ARIZA <br/>FRONT-END DEVELOPER
          </h1>
          <p className="font-oswald font-extrabold text-1xl lg:text-1xl xl:text-2xl text-pink-light">
          Junior Front End Developer with experience in Vuejs, React.js, JS, HTML, and CSS. Passionate about new web development technologies.
          </p>
          <button className="w-auto">
            <img src={start} alt="button-start" className='w-20 lg:w-28 hover:opacity-60' />
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

export default Home
