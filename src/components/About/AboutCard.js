export default function AboutCard({ img, about, resumeLink = "", linkedLink = "", GitHubLink = "", Email = "" }) {
  return (
    <div className="flex flex-row p-9 gap-x-12 w-5/6 border-blue-200 bg-gradient-to-tr from-[#09203f] to-[#537895] rounded-lg">


      <img src={`${img}`} className="w-1/4 h-full rounded-lg" alt="me" />


      <div className="flex flex-col justify-center gap-y-7">
        <div className="text-lg">
          {about}
        </div>

        <hr />

        <div className="flex flex-row gap-x-8">
          <a href="/">Download my resume</a>
          <a href="/">github</a>
          <a href="/">linked in</a>
          <a href="mailto:Mohammed-Alajmi@outlook.sa">Email</a>
        </div>
      </div>

    </div>
  )
}