import React from 'react';
import {Link} from 'react-router-dom';

function TopButton(props) {
    return (
        <Link to={props.url}><button className={"h-7 pl-2 text-modern-400  md:border-t-0 md:border-b-0 text-sm text-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 " + props.class}>{props.label}</button></Link>
    )
}

export default TopButton;