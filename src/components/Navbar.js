import React, { Component } from 'react';
import { Link } from "react-scroll";
import posed from 'react-pose';
import '../styles/Navbar.scss';

const Sidebar = posed.ul({
    open: {
        x: '-50%',
        y: '-50%',
        delayChildren: 600,
        staggerChildren: 200
    },
    closed: { x: '-500%', delay: 300 }
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

        if (!this.state.isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        this.props.toggleOverlay();

    }

    render() {

        const { isOpen } = this.state;

        const arrayOfNavItems = ['About', 'Resume', 'Projects', 'Contact'];

        const navItems = arrayOfNavItems.map((item, i) => {
            return (
                <Link onClick={this.toggle.bind(this)} key={i} to={item} spy={true} smooth={true} duration={1000}>
                    <Item className="item">
                        <span>{item}</span>
                    </Item>
                </Link>
            )
        });

        return [
            
            <div key="Nav" className="Nav">
                <div className="nav-button" onClick={this.toggle.bind(this)}>

                    <button className="hamburger hamburger--spin" type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>

                </div>
            </div>

            ,

            <Sidebar key="Sidebar" className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                { navItems }
            </Sidebar>
            
        ]
    }

}

export default Navbar;