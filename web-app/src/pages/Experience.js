import '../App.css';
import React, { useState, useEffect } from 'react';
import Heading from '../elements/Heading';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Main from '../sections/Main';
import ElementTransition from '../elements/ElementTransition';
import Timeline from '../elements/Timeline';
function Experience() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    }
  }, []);


  return (
    <ElementTransition show={isOpen}>
      <Header />
      <Main>
        <Heading label="Experience" />
        <Timeline />
      </Main>
      <Footer />
    </ElementTransition>
  );
}

export default Experience;
