import React from 'react';
import {Link} from 'react-router-dom';

function HeroButton(props) {
    return (
        <Link to={props.url}><button class="mx-auto lg:mx-0  bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-100 ease-in-out relative z-10">
        {props.label}
      </button>
        </Link>
    )
}

export default HeroButton;