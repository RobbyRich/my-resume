import React from 'react';
import { Link } from 'react-router-dom';

function HyperLink(props) {
    return (
        <Link to={props.url}><div class="inline-block text-gray-800 no-underline hover:underline hover:text-underline py-2 px-4 transform transition hover:scale-105 duration-100 ease-in-out">{props.label}</div></Link>
    )
}

export default HyperLink;