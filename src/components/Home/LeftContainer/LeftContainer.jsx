import React from "react";
import './leftContainer.css';

const LeftContainer = () => {
    return (
        <div className='left-container'>
            <h1 className='logo'>PROOF</h1>
            <p>
                Explore. <br />
                Shoot. <br />
                Write.
            </p>
            <div className='info-wrapper'>
                <div className='tagline'>A Nature Photography Magazine</div>
                <div className='byline'>By Billy Rogers</div>
            </div>
        </div>
    );
}

export default LeftContainer;