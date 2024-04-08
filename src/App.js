//import logo from './logo.svg';
import NavBar from './components/NavBar';
import AboutCard from './components/About/AboutCard';
import Skills from './components/Skills/Skills'
import me from './me.json'
import Logo from './assets/aboutPics/HiEmoji.png'
import LogoGif from './assets/aboutPics/HiEmojiGif.gif'
import ProjectCard from './components/projects/ProjectCard';

function App() {
  return (
    <div className="App font-Reddit flex flex-col items-center min-h-screen pb-6 text-white bg-[#29323c]">
      {false ?
        <div className='w-full bg-white bg-opacity-45'>
          <NavBar />
        </div>
        : <></>
      }

      <div className='flex flex-col gap-y-24 justify-center items-center w-full px-8 lg:px-24 mt-20'>
        <AboutCard imgLogo={Logo} imgGif={LogoGif} resumeLink={me.resumeLink} linkedLink={me.linkedLink} GitHubLink={me.GitHubLink} Email={me.Email} about={`${me.about}`} />

        <Skills />

        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
