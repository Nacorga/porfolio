import React, { Component } from 'react';
import '../styles/Navbar.scss';
// import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {

    render() {

        const arrayOfNavItems = ['Home', 'About', 'Works', 'Skills', 'Projects', 'Contact'];

        const navItems = arrayOfNavItems.map((item, i) => {
            return (
                <li className="nav-item">
                    <a class="smoothscroll" href={item}>{item}</a>
                </li>
            )
        });

        return(

            <div className="Nav">
                <ul className="nav-list">
                    { navItems }
                </ul>
            </div>

        )
    }

}

export default Navbar;