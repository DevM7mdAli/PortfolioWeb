import { SiNextdotjs, SiFlask, SiMysql, SiSqlite, SiDart, SiTypescript } from 'react-icons/si'
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";


export default function ListOfSkills() {

  const listOfSkills = [
    {
      title: "Languages", allSkill: [{ name: 'JavaScript', icon: IoLogoJavascript },
      { name: 'TypeScript', icon: SiTypescript }, { name: 'Dart', icon: SiDart }]
    },
    {
      title: "Front End", allSkill: [{ name: 'React JS', icon: FaReact },
      { name: 'Fluter', icon: RiFlutterFill }, { name: 'NextJS', icon: SiNextdotjs }]
    },
    {
      title: "BackEnd End", allSkill: [{ name: 'FireBase', icon: IoLogoFirebase },
      { name: 'Next JS', icon: SiNextdotjs }, { name: 'Flask', icon: SiFlask }]
    },
    {
      title: "dataBase", allSkill: [{ name: 'FireStore', icon: IoLogoFirebase },
      { name: 'mySQL', icon: SiMysql }, { name: 'SQLite', icon: SiSqlite }]
    },
  ]


  return (
    <div className='flex flex-row justify-center flex-wrap gap-x-12 text-center'>
      {
        listOfSkills.map(({ title, allSkill }) => (
          <div className='flex flex-col gap-y-9 p-4 bg-gradient-to-tr from-bgFromGrad to-black rounded-lg transition-all scale-95 hover:scale-100' key={title} >
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
  )
}