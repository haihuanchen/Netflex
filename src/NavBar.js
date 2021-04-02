import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from './netflex-logo.png';

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false); 
        })
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img 
                className="nav-logo"
                src={logo}
                alt="Netflex Logo"
            />
            <img 
                className="nav-avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflex Avatar"
            />
        </div>
    )
}

export default NavBar;
