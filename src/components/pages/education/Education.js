import React, {Component} from "react";

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <h6>
                            <strong><i className="fas fa-graduation-cap"></i>EDUCATION</strong>
                        </h6>
                        <hr />
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Web Developer</strong>
                                        <span>2020-2021</span>
                                    </h6>
                                    <p>
                                        RSSchool, courses frontend developer;
                                        
                                    </p>
                                    <p>
                                        It-kamasutra, JS, ReactJS
                                    </p>
                                </blockquote>
                            </div>
                        
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom mt">
                                        <strong>Specialist of computer security</strong>
                                        <span>2002-2008</span>
                                    </h6>
                                    <p>
                                        South Federal Educational University (SFEDU), Faculty information security.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


