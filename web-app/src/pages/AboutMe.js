import '../App.css';
import { Transition } from '@headlessui/react';
import React, {useState,useEffect} from 'react';
import Heading from '../elements/Heading';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Main from '../sections/Main';
function AboutMe() {
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
    <Header />
    
    <Main>
      <Heading label="About Me" />
      <div class="w-full md:w-3/4 mx-auto">
      <p class="text-left">I have been writing software for 20 years professionally, but my love of creating software started much earlier than that.  My father gave me my first computer when I was 10 years old and I wrote my first application when I was 11 years old using BASIC and a programming manual.  I was the only kid in my neighborhood with a computer and my friends would come over to play the shareware games I would install on it.</p>
      <p class="text-left pt-4">I spent a good portion of my childhood either on a computer or reading books. I still have those hobbies in adulthood, but I have also added camping, gardening, parenting, and trying to find the tv remote to my list of activities.</p>
      </div>
    </Main>
    <Footer />
    </Transition>
  );
}

export default AboutMe;
