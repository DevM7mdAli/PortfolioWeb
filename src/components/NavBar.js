export default function NavBar() {
  const navName = ["About", "Skills", "Projects", "Experiences"];
  return (
    <nav className="flex flex-row justify-center bg-transparent mt-2">

      <div className="flex flex-grow gap-x-10 justify-center">
        {navName.map((category) => (
          <a key={category} href={`#${category}`}>
            <h1 className="bg-blue-600 p-6">{category}</h1>
          </a>
        ))}
      </div>

      <div className="flex flex-grow-1 gap-x-5 justify-end mr-1">
        <button className="bg-blue-500 px-12 rounded-full">lang</button>
        <button className="bg-blue-500 px-12 rounded-full">dark</button>
      </div>



    </nav>
  );
}
