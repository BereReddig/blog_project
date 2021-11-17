import React from "react";
import './home.css';
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";


const Home = () => {
    return (
        <div className='home-wrapper'>
            <LeftContainer/>
            <RightContainer/>
        </div>
    );
}

export default Home;