import React from "react";
import ImgProfile from "../../images/qrCovid.png" 


const PagesProfile = () => {
    
    return (
        <div>
            <div className="avatarImg">
                <img className="circle responsive-img"
                src={ImgProfile}
                alt="Roman Velichko" />
            </div>
            
            <div className="card light-blue darken-3 z-depth-0">
                <div className="card-content">
                    <h6 className="white-text">
                        <strong>#Profile</strong>
                    </h6>
                    <hr />
                    <p className="grey-text text-lighten-3 pt">
                        Landing pages, SPA
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PagesProfile;