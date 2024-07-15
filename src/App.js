//import logo from './logo.svg';
import NavBar from './components/NavBar';
import AboutCard from './components/About/AboutCard';
import Skills from './components/Skills/Skills'
import me from './data/me.json'
import Logo from './assets/aboutPics/HiEmoji.png'
import LogoGif from './assets/aboutPics/HiEmojiGif.gif'
import ProjectCard from './components/projects/ProjectCard';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Error404 from './components/Error'
import Footer from './components/Footer';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={< Error404 />}>
      <Route index element={<HolderElement />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

function HolderElement() {
  return (
    <div className="App font-Reddit flex flex-col items-center min-h-screen text-white bg-mainBackground">


      <NavBar />


      <div>
        <div className='flex flex-col gap-y-64 justify-center items-center w-full px-8 lg:px-24 mt-20'>
          <AboutCard imgLogo={Logo} imgGif={LogoGif} resumeLink={me.resumeLink} linkedLink={me.linkedLink} GitHubLink={me.GitHubLink} XLink={me.XLink} Email={me.Email} about={`${me.about}`} />

          <Skills />

          <ProjectCard />
        </div>
      </div>
      <Footer linkedLink={me.linkedLink} GitHubLink={me.GitHubLink} XLink={me.XLink} Email={me.Email} />
    </div>
  )
}


export default App;
