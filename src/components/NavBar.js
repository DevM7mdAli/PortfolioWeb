import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useState, useEffect } from "react";
import DMA from '../assets/DMA.png'






export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-6 mb-1 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="white"
        className="p-1"
      >
        <a href="#AboutMe" className="flex items-center">
          About me
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1"
      >
        <a href="#Skills" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1"
      >
        <a href="#projects" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1"
      >
        <a href="#contact" className="flex items-center">
          Contact me
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 max-h-[768px] w-full z-30 text-white">
      <Navbar className="h-max max-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-4 bg-mainBackground">
        <div className="flex items-center justify-between">
          <a className="sm:w-24 w-16 flex justify-center items-center" href="#">
            <img src={DMA} alt="Logo" />
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
}
