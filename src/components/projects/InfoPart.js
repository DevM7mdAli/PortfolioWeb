import { CiLink } from "react-icons/ci";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react'
import app from '../../firebase'
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Loading from "../Loading";


export default function InfoPart({ tag, img, name, info, object, link, stacks, index }) {
  const [image, setImage] = useState('')
  const [imgFinishLoad, setImgFinishLoad] = useState(false);

  useEffect(() => {
    const storage = getStorage(app);
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setImage(url,
          setImgFinishLoad(true)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [img]);

  return (
    <motion.div className='flex flex-col max-w-80 shadow-2xl rounded shadow-bgFromGrad transition-all scale-95 hover:scale-100 gap-y-2'
      key={index}
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.1, type: "spring", stiffness: 80 }}
    >
      <div>
        <h1 className='mt-1 ml-1 absolute text-black p-2 bg-opacity-40 bg-white rounded-lg'>
          {tag}
        </h1>
        {imgFinishLoad ?
          <img src={image} className={`w-full max-h-48 ${object ? "object-contain" : "object-cover"}`} alt={name} />

          :
          <div className="flex justify-center items-center">
            <Loading typeLoad={'spinningBubbles'} />
          </div>
        }
      </div>

      <div className='px-5'>
        <h1 className='text-lg mb-2'>
          {name}
        </h1>
        <h2 className='text-start text-sm'>
          {info}
        </h2>
      </div>

      <div className="flex flex-col justify-end items-end h-full gap-y-6 px-5 pb-2 pt-1">
        <a className="flex items-center rounded-xl bg-btnBgColor px-2 py-1 text-lg font-bold hover:underline hover:scale-105 transition-transform" href={link} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          View project {<CiLink />}
        </a>
        <div className="flex justify-start w-full flex-wrap gap-3">
          {
            stacks.map((value, index) => (
              <div
                key={index}
                className="p-2 bg-white/30 rounded-full"
              >
                {value}
              </div>
            ))
          }
        </div>
      </div>

    </motion.div>
  )
}