import React, {useState,useEffect} from 'react';
import headshot from './img/headshot.png';
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillLinkedin } from 'react-icons/ai'
import SideLink from './SideLink';
import TopButton from './TopButton';
import { Transition } from '@headlessui/react';
import {Link} from 'react-router-dom';

function TwoCol(props) {
  const [isOpen,setOpen] = useState(false);

  useEffect(()=> {
    setOpen(true);

    return() => {
      setOpen(false);
    }
  },[]);

  return (
    <Transition
    appear={true}
    show={isOpen}
    enter="transition-opacity duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div class="flex flex-col bg-modern-100">
      <div class="h-16 flex flex-row justify-between pl-2 md:pr-2 items-center">
      <Link to="/"><div class="tracking-wider text-2xl uppercase font-semibold text-modern-400">Robert Richards</div></Link>
      <div>
      <TopButton label="Experience" class="ml-1 mr-1" url="/experience" />
              <TopButton label="Projects" class="ml-1 mr-1  pr-2" url="/projects" />
              <TopButton label="Skills" class="ml-1 mr-1  pr-2" url="/skills" />
              <TopButton label="About" class="ml-1 mr-1  pr-2" url="/about"/>
              <TopButton label="Contact" class="ml-1" url="/contact" />
              </div>
      </div>
        <div class="bg-modern-300 pt-2 pb-2 md:h-72">
        <div class="mx-auto bg-white w-10/12 relative top-14 rounded shadow-lg h-auto flex flex-row">
        <div class="md:w-30 max-w-sm md:p-2 hidden md:flex md:flex-col rounded from-modern-200 to-modern-100 bg-gradient-to-r border-r-8 border-double shadow-inner">
            <div>
              <img class="rounded-sm mx-auto" alt="headshot" width="80" src={headshot} />
            </div>
            <div class="mt-2">
              <SideLink url="mailto:robertrichards8@gmail.com">
                <HiOutlineMail size={25} class="mx-auto" />  
              </SideLink>
              <div class="mt-2"></div>
              <SideLink url="https://www.linkedin.com/in/robert-w-richards/" target="_blank">
              <AiFillLinkedin size={25} class="mx-auto"/>
              </SideLink>
            </div>
          </div>
        <div class="w-full p-4 mx-auto">
        <div class="block text-2xl tracking-wide font-medium text-modern-400  ">{props.heading}</div>
          {props.children}
        </div>
        </div>
        </div>      
    </div>
  </Transition>
  );
}

export default TwoCol;