import burguer from '../public/burguer.png'
function TopNav() {
  return (
    <div className="text-3xl font-bold font-montserrat">
      <header className="bg-white absolute flex justify-center h-20 xl:24 w-full">
        <nav className="h-full w-5/6 flex flex-row items-center border-b-1 border-black">
          <h2>Santiago Quintero</h2>
          <img src={burguer} alt="menu-burguer" className="w-12"/>
            <ul className="hidden lg:flex fex-row mx-12 xl:mx-14">
              <li className="font-montserrat font-extrabold text-xl mr-12 xl:mr-14">
                WORK
              </li>
              <li className="font-montserrat font-extrabold text-xl mr-12 xl:mr-14">
                CONTACT
              </li>
            </ul>
        </nav>
      </header>
    </div>
  );
}

export default TopNav;
