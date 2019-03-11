import React, { Component } from 'react';
import './styles/App.scss';

// Components
import Navbar from './components/Navbar';
import HomeComponent from './components/pages/Home';
import AboutComponent from './components/pages/About';
import ResumeComponent from './components/pages/Resume';
import ProjectsComponent from './components/pages/Projects';

class App extends Component {

    render() {

        return (
            <div className="App">

                <Navbar />
                <HomeComponent />

                <div className="bkg dark vp">
                    <div className="container">
                        <AboutComponent title="About me" />
                    </div>
                </div>

                <div className="bkg light vp">
                    <ResumeComponent title="Resume" />
                </div>

                <ProjectsComponent />

            </div>
        );
    }
}

export default App;
