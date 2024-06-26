import { CiLink } from "react-icons/ci";
import { motion } from "framer-motion";
import projects from "../../data/projects"


export default function InfoPart() {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-x-12 gap-y-10'>
      {
        projects.map((infoProject, index) => {
          return (
            <motion.div className='flex flex-col max-w-80 shadow-2xl rounded shadow-bgFromGrad transition-all scale-95 hover:scale-100 gap-y-2'
              key={index}
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.1, type: "spring", stiffness: 80 }}
            >
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
                <motion.a className="flex items-center rounded-xl bg-btnBgColor px-2 py-1 text-lg font-bold hover:underline" href={infoProject.link} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  view project {<CiLink />}
                </motion.a>
              </div>
            </motion.div>
          )
        })
      }
    </div>
  )
}