import React from "react";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './rightContainer.css';
import About from "./About/About";

const RightContainer = () => {
    return (
        <div className='right-container'>
            <Router>
                <Nav/>
                <Routes>
                    <Route path='about' element={<About/>} />
                    {/* <Route path='/articles' element={} /> */}
                    {/* <Route path='/register' element={} />
                    <Route path='/login' element={} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default RightContainer;