import burguer from '../public/burguer.png'
import React,{useState} from "react"
const TopNav = () => {
const [active,setActive] =useState(true)

  return (
    <div className="text-3xl font-bold font-montserrat">
      <header className="absolute flex items-center justify-center h-20 xl:24 w-full border-b-2 border-green-soft">
        <nav className="h-full w-5/6 flex flex-row items-center lg:justify-between ">
          <button>
            <h2 className="hidden lg:flex font-grotesk font-extrabold text-green-dark">Santiago Quintero Ariza</h2>
          </button>
          <button onClick={() => setActive(s => !s) }>
            <img src={burguer} alt="menu-burguer" className="w-10 flex lg:hidden"/>
          </button>
          <ul className={`w-full lg:w-auto lg:flex fex-row lg:justify-between ${active ? 'hidden' : 'flex justify-around'}`}>
            <li className="font-grotesk font-extrabold text-base md:text-lg lg:text-xl lg:mr-12 xl:mr-14 text-green-dark">
              SERVICES
            </li>
            <li className="font-grotesk font-extrabold text-base md:text-lg lg:text-xl lg:mr-12 xl:mr-14 text-green-dark">
              WORK
            </li>
            <li className="font-grotesk font-extrabold text-base md:text-lg lg:text-xl lg:mr-12 xl:mr-14 text-green-dark">
              CONTACT
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default TopNav;
