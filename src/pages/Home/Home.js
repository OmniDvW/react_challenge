import React from 'react';
import "./Home.scss";
import Databiz from "../../assets/images/client-databiz.svg";
import Audiophile from "../../assets/images/client-audiophile.svg";
import Meet from "../../assets/images/client-meet.svg";
import Maker from "../../assets/images/client-maker.svg";

const Home = () => {
    return (
        <div className='home'>
            <div className='home-right'>
                <img className='img-desktop' src="./images/image-hero-desktop.png" alt="lol" />
                <img className='img-mobile' src="./images/image-hero-mobile.png" alt="lol" />
            </div>
            <div className='home-left'>
                <div className='home-left-content'>
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button>
                        Learn more
                    </button>
                    <div className='home-icon'>
                        <img src={Databiz} alt="" />
                        <img src={Audiophile} alt="" />
                        <img src={Meet} alt="" />
                        <img src={Maker} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;