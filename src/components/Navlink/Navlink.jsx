import React from 'react'
import './Navlink.css'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom';

function Navlink(props) {
    
    const location = useLocation();
    const handleClick = () => {
        if (location.pathname === props.to) {
            return
        }
    }


    
    return (
        <>
            <li className="nav-item">
                <Link className={props.classes} onClick={handleClick} to={props.to}>{props.name}</Link>
            </li>
        </>
    )
}

export default Navlink