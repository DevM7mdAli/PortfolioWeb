import { SiNextdotjs, SiFlask, SiMysql, SiSqlite } from 'react-icons/si'
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export default function Skills() {
  const listOfSkills = [
    {
      title: "Font End", allSkill: [{ name: 'React JS', icon: FaReact },
      { name: 'Fluter', icon: RiFlutterFill }, { name: 'Fluter', icon: SiNextdotjs }]
    },
    {
      title: "BackEnd End", allSkill: [{ name: 'FireBase', icon: IoLogoFirebase },
      { name: 'Next JS', icon: SiNextdotjs }, { name: 'Flask', icon: SiFlask }]
    },
    {
      title: "dataBase", allSkill: [{ name: 'firebase', icon: SiNextdotjs },
      { name: 'mySQL', icon: SiMysql }, { name: 'SQLite', icon: SiSqlite }]
    },
  ]

  return (
    <section className='flex flex-col gap-y-9 text-center'>
      My skills
      <div className='flex flex-row justify-center flex-wrap gap-x-12 text-center'>
        {
          listOfSkills.map(({ title, allSkill }) => (
            <div className='flex flex-col gap-y-9 p-4 bg-black' key={title} >
              <h1>{title}</h1>
              {allSkill.map(skill => {
                return (
                  <div>
                    <h2>{skill.name}</h2>
                    <div className='flex justify-center'>
                      {<skill.icon size={80} />}
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        }
      </div>
    </section>
  )
}