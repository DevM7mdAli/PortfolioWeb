//import logo from './logo.svg';
import NavBar from './components/NavBar';
import AboutCard from './components/About/AboutCard';
import me from './me.json'


function App() {
  return (
    <div className="App font-Reddit flex flex-col items-center h-screen px-2 gap-y-6 text-white bg-[#29323c]">
      <div className='w-full'>
        <NavBar />
      </div>

      <div className='flex justify-center w-full'>
        <AboutCard img={`${me.img}`} about={`${me.about}`} />
      </div>
    </div>
  );
}

export default App;
