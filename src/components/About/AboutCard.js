import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";

export default function AboutCard({ imgLogo, about, imgGif, resumeLink, linkedLink, GitHubLink, XLink, Email }) {
  const [inMouse, setInMouse] = useState(false)
  return (
    <motion.section className="flex flex-col items-center"
      id="AboutMe"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}

    >

      <TypeAnimation
        sequence={[
          'About Me', 2500,
          'Web Developer', 2000,
          'App Developer', 2000,
          'Cyber security', 2000,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        className="text-3xl mb-9"
      />

      <div className="flex flex-col lg:flex-row p-9 gap-x-12 max-w-7xl h-auto border-blue-200 bg-gradient-to-tr from-bgFromGrad to-black rounded-lg transition-all scale-95 hover:scale-100">
        <div className="flex justify-center items-center">
          <img onMouseEnter={() => { setInMouse(true) }} onMouseLeave={() => { setInMouse(false) }} src={!inMouse ? `${imgLogo}` : `${imgGif}`} className={`w-auto h-auto bg-opacity-5 bg-white rounded-lg scale-95 ${!inMouse ? "transition-transform " : "transition-transform scale-100"}`} alt="Logo Part" />
        </div>


        <div className="flex flex-col justify-center gap-y-7">
          <div className="text-sm xl:text-lg">
            {about}
          </div>

          <hr />

          <div className="flex flex-col items-center gap-y-8 sm:flex-row gap-x-8">
            <motion.div className="flex"
              whileHover={{ scale: 1.1 }}
            >
              <a href={resumeLink} target="_blank" rel="noopener noreferrer" className=" rounded-xl bg-btnBgColor px-2 py-1 text-lg font-bold">Download my resume</a>
            </motion.div>
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
    </motion.section>
  )
}