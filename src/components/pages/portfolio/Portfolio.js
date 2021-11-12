import React, {Component} from "react";
import ImgProfile from "../../images/qrCovid.png" 

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="avatarImg">
                    <img className="circle responsive-img"
                    src={ImgProfile}
                    alt="Roman Velichko" />
                </div>
                <div className="card light-blue darken-4 z-depth-0 hide-one-large-only">
                    <div className="card-content center social">
                        <h2 className="grey-tect text-lighten-3">
                            <strong>ROMAN VELICHKO</strong>
                        </h2>
                        <h5 className="grey-text text-lighten-1">
                            Full-stack developer
                        </h5>
                        <a href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}