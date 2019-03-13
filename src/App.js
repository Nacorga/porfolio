import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './styles/App.scss';

// Components
import Navbar from './components/Navbar';
import HomeComponent from './components/pages/Home';
import AboutComponent from './components/pages/About';
import ResumeComponent from './components/pages/Resume';
import ProjectsComponent from './components/pages/Projects';
import ContactComponent from './components/pages/Contact';
import FooterComponent from './components/Footer';

class App extends Component {

    render() {

        return (
            <div className="App">

                <Navbar />
                <HomeComponent />

                <div className="About bkg blue-dark vp">
                    <div className="container">
                        <AboutComponent title="About me" />
                    </div>
                </div>

                <div className="Resume bkg light vp">
                    <ResumeComponent title="Resume" />
                </div>

                <div className="Projects">
                    <ProjectsComponent title="Projects" />
                </div>

                <div className="Contact bkg blue-light vp">
                    <ContactComponent title="Have a question or want to work together?" />
                </div>

                <div className="bkg blue-dark">
                    <Link activeClass="active" onClick={scroll.scrollToTop} spy={true} smooth={true} duration={1500}>
                        <div className="arrow-box">
                            <i className="fas fa-arrow-up"></i>
                        </div>
                    </Link>
                    <FooterComponent />
                </div>

            </div>
        );
    }
}

export default App;
