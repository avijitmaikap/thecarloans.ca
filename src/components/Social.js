import React from 'react'
import {SocialIcons} from "./Utilities"
import {BsInstagram,BsTwitter, BsLinkedin, BsFacebook, BsPinterest} from "react-icons/bs"
import "../styles/social.scss"

function Social() {
    return (
        <section className="social" id="social">
            <div className="container">
                <div className="social-wrapper">
                    <div className =" connect btn-rounded rounded-pill">
                        Connect With Us
                        <span>
                            <i class="fas fa-arrow-circle-right"></i>
                        </span>
                    </div>
                    <SocialIcons
                        fb = {<BsFacebook/>}
                        ig = {<BsInstagram/>}
                        tw = {<BsTwitter/>}
                        li = {<BsLinkedin/>}
                        pi = {<BsPinterest/>}
                    />
                </div>

            </div>

        </section>
    )
}

export default Social
