import React from 'react';
import HyperLink from './HyperLink';
function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav id="header" class="fixed w-full z-30 top-0 text-white bg-gradient-to-r from-blue-600 to-blue-200">
      <div class="w-full container mx-auto flex flex-wrap items-start lg:items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <div class="font-extrabold  no-underline hover:no-underline text-3xl">
            RWR
          </div>
        </div>
        <div class="lg:hidden flex flex-col items-end">
          <button id="nav-toggle" class="items-center p-1 mr-4 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => setMenuOpen(!menuOpen)}>
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className={"lg:flex flex-grow text-right" + (menuOpen ? " flex" : " hidden")}>
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li>
                <HyperLink label="home" url="/" />
              </li>
              <li>
                <HyperLink label="experience" url="/experience" />
              </li>
              <li>
                <HyperLink label="personal projects" url="/projects" />
              </li>
              <li>
                <HyperLink label="about me" url="/aboutme" />
              </li>
              <li>
                <a href="mailto:rrichardsresume@gmail.com" class="inline-block text-gray-800 no-underline hover:underline hover:text-underline py-2 px-4 transform transition hover:scale-105 duration-100 ease-in-out">contact</a>
              </li>
            </ul>
          </div>

        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <HyperLink label="home" url="/" />
            </li>
            <li class="mr-3">
              <HyperLink label="experience" url="/experience" />
            </li>
            <li class="mr-3">
              <HyperLink label="personal projects" url="/projects" />
            </li>
            <li class="mr-3">
              <HyperLink label="about me" url="/aboutme" />
            </li>
            <li class="mr-3">
              <HyperLink label="contact" url="/contact" />
            </li>
          </ul>
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Menu;