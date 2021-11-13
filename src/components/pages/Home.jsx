import React from "react";

import PagesExperience from "./experience/Experience";
import PagesSkills from "./skills/Skills";
import PagesProfile from "./profile/Profile";
import PagesContact from "./contact/Contact";
import PagesAbout from "./about/About";
import PagesEducation from "./education/Education";
import PagesPortfolio from "./portfolio/Portfolio";

const PagesHome = () => {
   
    return (
        <section>
            <div className='row sameHeight'>
                <div className='col s12 m12 l4 light-blue darken-3'>
                    
                    <PagesProfile />
                    <PagesContact />
                    <PagesSkills />
                </div>
                <div className='col s12 m12 l8 white'>
                    <PagesAbout />
                    <PagesEducation />
                    <PagesExperience />
                    <PagesPortfolio />
                </div>
            </div>
        </section>
    )
}

export default PagesHome;