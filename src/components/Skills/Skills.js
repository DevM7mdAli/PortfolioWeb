import ListOfSkills from "./ListOfSkills"
import { motion } from 'framer-motion'

export default function Skills() {

  return (
    <motion.section className='flex flex-col gap-y-9 text-center' id='Skills'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 80 }}

    >
      <h1 className='text-5xl font-bold'>
        My skills
      </h1>
      <ListOfSkills />
    </motion.section>
  )
}