import { Link } from "react-router-dom"
import { MdErrorOutline } from "react-icons/md";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center text-center font-Reddit gap-y-4 h-screen text-white bg-[#29323c] px-4">
      <div>
        <div className="flex justify-center">
          <MdErrorOutline />
          <h1 className="text-2xl md:text-4xl">
            404 - Page Not Found
          </h1>
        </div>
        <p className="md:text-lg">
          The page you are looking for does not exist.
        </p>
      </div>
      <Link to={"/"} className="flex items-center rounded-xl bg-btnBgColor px-2 py-1 text-lg font-bold">
        Go Back to Main Page
      </Link>
    </div>
  )
}