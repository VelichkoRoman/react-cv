import React, {Component} from "react";

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card light-blue darken-3 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>#PROFESSIONAL SKILLS</strong>
                        </h6>
                        <hr />
                        <div className="row pt">
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">HTML</p>
                                <div className="progress blue-grey lighten-5">
                                    <div className="determinate  lime accent-4" style={{width: '89%'}}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">CSS</p>
                                <div className="progress blue-grey lighten-5">
                                    <div className="determinate  lime accent-4" style={{width: '85%'}}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">JavaScript</p>
                                <div className="progress blue-grey lighten-5">
                                    <div className="determinate  lime accent-4" style={{width: '78%'}}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">Git</p>
                                <div className="progress blue-grey lighten-5">
                                    <div className="determinate  lime accent-4" style={{width: '60%'}}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">ReactJS</p>
                                <div className="progress blue-grey lighten-5">
                                    <div className="determinate  lime accent-4" style={{width: '40%'}}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="grey-text text-lighten-3">Jquery</p>
                                <div className="progress blue-grey lighten-5">
                                    <div className="determinate  lime accent-4" style={{width: '35%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}