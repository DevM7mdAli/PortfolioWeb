import { SiNextdotjs } from 'react-icons/si'

export default function Skills() {
  const listOfSkills = [
    {
      title: "Font End", allSkill: [{ name: 'next JS', icon: SiNextdotjs },
      { name: 'Fluter', icon: SiNextdotjs }]
    },
    {
      title: "BackEnd End", allSkill: [{ name: 'FireBase JS', icon: SiNextdotjs },
      { name: 'Node JS', icon: SiNextdotjs }]
    },
    {
      title: "dataBase", allSkill: [{ name: 'firebase', icon: SiNextdotjs },
      { name: 'mySQL JS', icon: SiNextdotjs }]
    },


  ]

  return (
    <div className='flex flex-row justify-center flex-wrap gap-x-12 text-center'>
      {
        listOfSkills.map(({ title, allSkill }) => (
          <div className='flex flex-col gap-y-9 p-4 bg-black' >
            <h1>{title}</h1>
            {allSkill.map(skill => {
              return (
                <div >
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