import burguer from '../public/burguer.png'
import React,{useState} from "react"
const TopNav = () => {
const [active,setActive] =useState(true)
  
  return (
    <div className="text-3xl font-bold font-montserrat">
      <header className="bg-white absolute flex items-center justify-center h-20 xl:24 w-full">
        <nav className="h-full w-5/6 flex flex-row items-center lg:justify-between border-b-1 border-black">
          <button>
            <h2 className="hidden lg:flex font-grotesk font-extrabold">Santiago Quintero</h2>
          </button>
          <button onClick={() => setActive(s => !s) }>
            <img src={burguer} alt="menu-burguer" className="w-12 flex lg:hidden"/>
          </button>
          <ul className={`lg:flex fex-row ml-12 lg:ml-0 lg:mx-12 xl:mx-14 ${active ? 'hidden' : 'flex'}`}>
            <li className="font-grotesk font-extrabold text-xl mr-12 xl:mr-14">
              WORK
            </li>
            <li className="font-grotesk font-extrabold text-xl lg:mr-12 xl:mr-14">
              CONTACT
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default TopNav;
