import React, { Component } from 'react';
import './styles/App.scss';

// Components
import Navbar from './components/Navbar';
import HomeComponent from './components/pages/Home';
import AboutComponent from './components/pages/About';

class App extends Component {

    render() {

        return (
            <div className="App">

                <Navbar />
                <HomeComponent />

                <div className="bkg black">
                    <div className="container">
                        <AboutComponent />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
