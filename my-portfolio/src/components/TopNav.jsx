import burguer from '../public/burguer.png'
import React,{useState} from "react"
const TopNav = () => {
const [active,setActive] =useState(true)

  return (
    <div className="text-3xl font-bold font-montserrat">
      <header className="absolute flex items-center justify-center h-20 xl:24 w-full border-b-2 border-green-soft">
        <nav className="h-full w-5/6 flex flex-row items-center lg:justify-between ">
          <button onClick={() => setActive(s => !s) }>
            <img src={burguer} alt="menu-burguer" className="w-16 lg:w-24 flex"/>
          </button>
          <ul className={`w-full lg:w-auto fex-row lg:justify-between ${active ? 'hidden' : 'flex justify-around'}`}>
            <li className="font-oswald font-extrabold text-base md:text-xl lg:text-3xl lg:mr-12 xl:mr-14 text-blue-dark">
              SERVICES
            </li>
            <li className="font-oswald font-extrabold text-base md:text-xl lg:text-3xl lg:mr-12 xl:mr-14 text-blue-dark">
              WORK
            </li>
            <li className="font-oswald font-extrabold text-base md:text-xl lg:text-3xl lg:mr-12 xl:mr-14 text-blue-dark">
              CONTACT
            </li>
          </ul>
          <img src={burguer} alt="menu-burguer" className={`w-24 hidden ${active ? 'hidden' : 'lg:flex'}`}/>
        </nav>
      </header>
    </div>
  );
}

export default TopNav;
