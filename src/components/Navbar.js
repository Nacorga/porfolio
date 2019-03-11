import React, { Component } from 'react';
import '../styles/Navbar.scss';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {

        const arrayOfNavItems = ['About', 'Resume', 'Projects', 'Contact'];

        const navItems = arrayOfNavItems.map((item, i) => {
            return (
                <li className="nav-item">
                    <Link activeClass="active" to={item} spy={true} smooth={true} offset={-80} duration={500}>{item}</Link>
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