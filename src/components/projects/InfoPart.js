import { CiLink } from "react-icons/ci";
import Investech from '../../assets/ProjectImg/Investech.jpeg'
import CCSIT from '../../assets/ProjectImg/CCSIT-SC.jpeg'
import Quizle from '../../assets/ProjectImg/Quizle.jpg'
import PrayTimes from '../../assets/ProjectImg/PrayTimes.png'
import FormFully from '../../assets/ProjectImg/FormFully.png'
import OldPort from '../../assets/ProjectImg/Old Portfolio.png'

const projects = [
  {
    tag: "Start-up",
    name: "INVESTECH",
    info: "A web application, We used Next JS And tailwind to make it, the idea of the project that connect graduation projects to the investors.",
    link: "https://twitter.com/investech_sa",
    img: Investech
  },
  {
    tag: "Volunteering",
    name: "CCSIT-SC",
    info: "A web application for ccsit council that helps student in the campus. It offers a lot of services like GPA calculator, Room finder, missing items page , contacts info and council members contact info. I used html , tailwind , js and fireBase to make the website.",
    link: "https://devm7mdali.github.io/CCSIT-SC",
    img: CCSIT
  },
  {
    tag: "Personal",
    name: "Quizle",
    info: "A smartphone app for test your knowledge with a variety of technology related questions each question has 4 MCQ one of the choice is correct, developed using Flutter and Dart.",
    link: "https://github.com/DevM7mdAli/Quizle-App",
    img: Quizle,
    object: 1
  },
  {
    tag: "Personal",
    name: "Pray Times Extension",
    info: "A web browser extension that let you see the pray time by choosing your city and give you random ayah every time you open the extension, i used html , tailwind and js to make it.",
    link: "https://github.com/DevM7mdAli/Pray-Times",
    img: PrayTimes,
    object: 1
  },
  {
    tag: "Personal",
    name: "FormFully",
    info: "A Chromium-based browsers extension that Automatically Auto fill in input fields with any value you want to save your precious time, i used html tailwind js to make it.",
    link: "https://chromewebstore.google.com/detail/formfully/ojlpggfkjhgadcjdmkgdmpilhmnghlmj?hl=en&authuser=0",
    img: FormFully,
    object: 1
  },
  {
    tag: "Personal",
    name: "Old Portfolio",
    info: "My first portfolio i made when i start learn web development",
    link: "https://devm7mdali.github.io/Old-Portfolio",
    img: OldPort,
  }
]



export default function InfoPart() {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-x-12 gap-y-10'>
      {
        projects.map(infoProject => {
          return (
            <div className='flex flex-col max-w-80 shadow-2xl rounded shadow-bgFromGrad transition-all scale-95 hover:scale-100 gap-y-2'>
              <div>
                <h1 className='mt-1 ml-1 absolute text-black p-2 bg-opacity-40 bg-white rounded-lg'>
                  {infoProject.tag}
                </h1>
                <img src={infoProject.img} className={`w-full max-h-48 ${infoProject.object ? "object-contain" : "object-cover"}`} alt={infoProject.name} />
              </div>

              <div className='px-5'>
                <h1 className='text-lg mb-2'>
                  {infoProject.name}
                </h1>
                <h2 className='text-start text-sm'>
                  {infoProject.info}
                </h2>
              </div>

              <div className="flex items-end h-full px-5 pb-2 pt-1">
                <a className="flex items-center rounded-xl bg-btnBgColor px-2 py-1 text-lg font-bold hover:underline" href={infoProject.link} target="_blank" rel="noopener noreferrer">
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