import React, { Component } from 'react';
import { Link } from "react-scroll";
import posed from 'react-pose';
import '../styles/Navbar.scss';

const Sidebar = posed.ul({
    open: {
        x: '0%',
        delayChildren: 200,
        staggerChildren: 200
    },
    closed: { x: '-100%', delay: 300 }
});

const Item = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});

class Navbar extends Component {

    state = { isOpen: false };
    
    toggle() {

        this.setState({ isOpen: !this.state.isOpen });

        var hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("is-active");

    }

    render() {

        const { isOpen } = this.state;

        const arrayOfNavItems = ['About', 'Resume', 'Projects', 'Contact'];

        const navItems = arrayOfNavItems.map((item, i) => {
            return (
                <Link to={item} spy={true} smooth={true} duration={1000}>
                    <Item className="nav-item" key={i}>
                        <span className="item">{item}</span>
                    </Item>
                </Link>
            )
        });

        return(

            <div className="Nav">
                <div className="nav-button" onClick={this.toggle.bind(this)}>

                    <button class="hamburger hamburger--elastic" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>

                </div>
                <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                    { navItems }
                </Sidebar>
            </div>
        )
    }

}

export default Navbar;