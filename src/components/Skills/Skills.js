import ListOfSkills from "./ListOfSkills"

export default function Skills() {

  return (
    <section className='flex flex-col gap-y-9 text-center' id='Skills'>
      <h1 className='text-5xl font-bold'>
        My skills
      </h1>
      <ListOfSkills />
    </section>
  )
}