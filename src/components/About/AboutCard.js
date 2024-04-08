import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function AboutCard({ imgLogo, about, imgGif, resumeLink, linkedLink, GitHubLink, XLink, Email }) {
  const [inMouse, setInMouse] = useState(false)
  return (
    <div className="flex flex-col lg:flex-row p-9 gap-x-12 w-full border-blue-200 bg-gradient-to-tr from-bgFromGrad to-black rounded-lg transition-all scale-95 hover:scale-100" id="AboutMe">

      <div>
        <img onMouseEnter={() => { setInMouse(true) }} onMouseLeave={() => { setInMouse(false) }} src={!inMouse ? `${imgLogo}` : `${imgGif}`} className={`w-full h-full bg-opacity-5 bg-white rounded-lg scale-95 ${!inMouse ? "transition-transform " : "transition-transform scale-100"}`} alt="Logo Part" />
      </div>


      <div className="flex flex-col justify-center gap-y-7">
        <div className="text-sm xl:text-lg">
          {about}
        </div>

        <hr />

        <div className="flex flex-col items-center gap-y-8 sm:flex-row gap-x-8">
          <div className="flex">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className=" rounded-xl bg-btnBgColor px-2 py-1 text-lg font-bold">Download my resume</a>
          </div>
          <div className="flex gap-x-8">
            <a href={XLink} target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={32} />
            </a>
            <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
            <a href={linkedLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </a>
            <a href={Email}>
              <MdEmail size={32} />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}