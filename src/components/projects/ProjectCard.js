import InfoPart from "./InfoPart";

export default function projectCard() {
  return (
    <section id="projects">
      <div className='flex flex-col gap-y-9 text-center'>
        <h1 className="text-5xl font-bold">
          Projects i worked on
        </h1>

        <div>
          <InfoPart />
        </div>
      </div>
    </section>
  )
}