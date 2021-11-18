import React from "react";

import './about.css';
import team1 from '../../../../assets/images/team1.jpg';
import team2 from '../../../../assets/images/team2.jpg';
import team3 from '../../../../assets/images/team3.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <section className='about'>
                <h2>About Proof</h2>
                <p>
                    We started Proof to commodo diam libero vitae erat.
                    Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
                <p>
                    Then we decided that it was varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat. Aenean
                    faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    Nunc ut sem vitae risus tristique posuere.
                </p>
            </section>
            <section className='the-team'>
                <h2>The Team</h2>
                <div className='row'>
                    <div className='column'>
                        <img src={team1} alt='picture of Rob Thomas'/>
                        <h5>Rob Thomas</h5>
                        <span className="fab fa-twitter"></span>
                        <span className="fab fa-instagram"></span>
                        <span className="fab fa-facebook-square"></span>
                    </div>

                    <div className='column'>
                        <img src={team2} alt='picture of Jen Jillians'/>
                        <h5>Jen Jillians</h5>
                        <span className="fab fa-twitter"></span>
                        <span className="fab fa-instagram"></span>
                        <span className="fab fa-facebook-square"></span>
                    </div>

                    <div className='column'>
                        <img src={team3} alt='picture of Tommy Tikes'/>
                        <h5>Tommy Tikes</h5>
                        <span className="fab fa-twitter"></span>
                        <span className="fab fa-instagram"></span>
                        <span className="fab fa-facebook-square"></span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;