import me from '../public/me.png'
const Home = () => {
  return (
    <main className="w-full h-screen flex flex-row items-end justify-end">
      <div className="lg:w-1/2 h-5/6 flex items-center justify-center">
        <div className="w-5/6 h-5/6 flex flex-col items-start">
          <div className="bg-green-light h-2 w-2/6" />
          <h1 className="font-oswald font-extrabold lg:text-4xl xl:text-5xl text-green-semi-dark">
            I'M  SANTIAGO <br/>FRONT-END DEVELOPER
          </h1>
          <p className="font-oswald font-extrabold lg:text-1xl xl:text-2xl text-green-light">Junior Front End Developer with experience in Vuejs, React.js, JS, HTML, and CSS. Passionate about new web development technologies.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-5/6 lg:flex hidden justify-center items-center">
        <img src={me} alt="myself" className="h-5/6"/>
      </div>
    </main>
  );
}

export default Home;
