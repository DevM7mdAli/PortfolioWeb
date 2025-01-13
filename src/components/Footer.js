import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion'
import DMA from '../assets/DMA.png'

export default function Footer({ linkedLink, GitHubLink, XLink, Email }) {
  return (
    <motion.footer className="w-full bg-mainBackground p-8 mt-20"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <a href="/" alt="logo" className="flex justify-center items-center md:w-24 w-16" >
          <img src={DMA} alt="logo" />
        </a>
        <div className="flex flex-wrap items-center gap-y-2 gap-x-8">
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
      <hr className="my-8 border-white-50" />
      <p className="text-white text-center font-normal">
        &copy; 2024 Mohammed Alajmi
      </p>
    </motion.footer>
  );
}