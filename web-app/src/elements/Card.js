import React from 'react';
import headshot from './img/headshot.png';
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillLinkedin } from 'react-icons/ai'
import TopButton from './TopButton';
import SideLink from './SideLink';
function Card() {
  return (
    <div class="ml-1 mr-1">
      <div class="max-w-sm mx-auto bg-modern-100 rounded shadow-2xl overflow-hidden md:max-w-md">
        <div class="flex">
          <div class="md:w-30 max-w-sm md:p-2 flex-col from-modern-200 to-modern-100 bg-gradient-to-r border-r-8 border-double shadow-inner">
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
          <div class="p-1 ">
            <div class="tracking-wider uppercase text-2xl font-semibold text-modern-400">Robert Richards</div>
            <div class="block text-md tracking-wide leading-tight font-medium text-modern-300">Software Architecture & Development</div>
            <ul class="pt-3 text-modern-300 text-sm list-disc ml-3 ">
              <li>
                9 years leading teams...
              </li>
              <li>
                10 years architecting solutions...
              </li>
              <li>
                16 years writing software...
              </li>
              <li>
              Forever a student...
              </li>
            </ul>
            <div class="pt-3 md:hidden flex-wrap justify-between flex">
              <TopButton label="Experience" class="border-gray-900 border-t-2 border-b-2" url="/experience" />
              <TopButton label="Projects" class="border-gray-900 border-t-2 border-b-2" url="/projects" />
              <TopButton label="Skills" class="border-gray-900 border-t-2 border-b-2" url="/skills"/>
              <TopButton label="About" class="border-gray-900 border-t-2 border-b-2" url="/about"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;