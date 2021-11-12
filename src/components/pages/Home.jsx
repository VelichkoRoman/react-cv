import React from "react";

import Profile from "./profile/Profile";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import About from "./about/About";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";

const Home = () => {
   
    return (
        <section>
            <div className='row'>
                <div className='col s12 m12 l4 light-blue darken-4'>
                    <Profile />
                    <Contact />
                    <Skills />
                </div>
                <div className='col s12 m12 l8 white'>
                    <About />
                    <Education />
                    <Experience />
                    <Portfolio />

                </div>
            </div>
        </section>
    )
}

export default Home;