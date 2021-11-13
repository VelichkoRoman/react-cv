import React, {Component} from "react";

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0 hide-on-med-and-down pt">
                    <div className="card-content social">
                        <h2 className="grey-text text-darken-3">
                            <strong>ROMAN VELICHKO</strong>
                        </h2>
                        <h5 className="grey-text text-lighten-1">
                           Web developer
                        </h5>
                        <a href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <i className="fab fa-twitter-square fa-2x"></i>
                        </a>
                        <a href="https://github.com/VelichkoRoman" target="_blank">
                            <i className="fab fa-github-square fa-2x"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
        )
    }
}