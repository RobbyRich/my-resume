import '../App.css';
import { Transition } from '@headlessui/react';
import React, { useState, useEffect } from 'react';
import Heading from '../elements/Heading';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import SubHeading from '../elements/SubHeading'
import Main from '../sections/Main';
import gatewayApi from '../api/gatewayApi'
import Skill from '../elements/Skill'

function Projects() {
  const [isOpen, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setOpen(true);

    const load = async () => {
      let response = await gatewayApi.getProjects();
      setProjects(response.result);
    }
    load()

    return () => {
      setOpen(false);
    }
  }, []);

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
      <Header />

      <Main>
        <Heading label="Personal Projects" width={96} />
        <div class="md:w-3/4 w-full mx-auto">
          {projects.map((project, index) =>
            <div key={index} class="text-left pb-5">
              <SubHeading label={project.title} />

              <p class="pl-8 pr-8">{project.description}</p>
              <div class="text-xs flex flex-wrap w-full pl-8 pr-8">
                {project.skills.map((skill, index) => {
                  return (
                    <Skill class="p-2 w-32 h-10" size={20} label={skill} key={index} />
                  )
                }
                )}

              </div>
            </div>
          )
          }
        </div>


      </Main>
      <Footer />
    </Transition>
  );
}

export default Projects;
