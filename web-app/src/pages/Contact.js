import '../App.css';
import { Transition } from '@headlessui/react';
import React, { useState, useEffect } from 'react';
import gatewayApi from "../api/gatewayApi";
import Heading from '../elements/Heading';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Main from '../sections/Main';
import Alert from '../elements/Alert';

function Contact() {
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState({ show: false, message: "" });

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ show: true, message: "Sending contact request..." });
    const { name, email, message } = e.target.elements;
    let contactDetails = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await gatewayApi.sendContactRequest(contactDetails);
    setStatus({ show: true, message: response.result });

    setTimeout(() => {
      e.target.reset();
      setStatus({ show: false, message: "" });
    }, 2000);
  };

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
        <form onSubmit={handleSubmit}>
          <Heading label="Contact" />
          <section class="text-gray-600 body-font relative">
            <div class="container px-5 mx-auto">
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-1/2">
                    <div class="relative text-left">
                      <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                      <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative text-left">
                      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                      <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="relative text-left">
                      <label for="message" class="leading-7 text-sm  text-gray-600">Message</label>
                      <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <button class="mx-auto lg:mx-0  bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-100 ease-in-out relative z-10">Submit</button>
                  </div>
                  <div class="p-2 w-full">
                    <Alert show={status.show} message={status.message} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </Main>
    </Transition>
  );
}

export default Contact;
