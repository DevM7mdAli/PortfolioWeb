import { CiLink } from "react-icons/ci";
import Investech from '../../assets/ProjectImg/Investech.jpeg'
import CCSIT from '../../assets/ProjectImg/CCSIT-SC.jpeg'

const projects = [
  {
    tag: "Start-up",
    name: "INVESTECH",
    info: "A web application, We used Next JS And tailwind to make it, the idea of the project that connect graduation projects to the investors.",
    link: "https://twitter.com/investech_sa",
    img: Investech
  },
  {
    tag: "Start-up",
    name: "CCSIT-SC",
    info: "A web application for ccsit council that helps student in the campus. It offers a lot of services like GPA calculator, Room finder, missing items page , contacts info and council members contact info. I used html , tailwind , js and fireBase to make the website.",
    link: "https://devm7mdali.github.io/CCSIT-SC",
    img: CCSIT
  },


]



export default function InfoPart() {
  return (
    <div className='flex flex-row flex-wrap gap-x-12 gap-y-10'>
      {
        projects.map(infoProject => {
          return (
            <div className='flex flex-col max-w-80 shadow-2xl shadow-bgFromGrad border border-opacity-10 border-spacing-6 border-white gap-y-2'>
              <div>
                <h1 className='absolute text-black p-2 bg-opacity-40 bg-white rounded-lg'>
                  {infoProject.tag}
                </h1>
                <img src={infoProject.img} className='w-full max-h-48' alt="project 1" />
              </div>

              <div className='px-2'>
                <h1 className='text-lg mb-2'>
                  {infoProject.name}
                </h1>
                <h2 className='text-start text-sm'>
                  {infoProject.info}
                </h2>
              </div>

              <div>
                <a className="flex" href={infoProject.link}>
                  view project {<CiLink />}
                </a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}