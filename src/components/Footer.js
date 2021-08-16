import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram as Insta, faFacebook as Fb, faGithub as Git, faLinkedin as Li } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <div id="footer">
            <div id="Creator">
                <h2>&copy; Copyright 2021 Andre Hagen</h2>
            </div>

            <div id="Info">
                <h3>
                    Our Socials
                </h3>
                
                <div id="socials">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={Insta} style={{fontSize: "24px"}} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={Fb} style={{fontSize: "24px"}} />
                    </a>

                    <a href="https://github.com/KodeAndre" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={Git} style={{fontSize: "24px"}} />
                    </a>

                    <a href="https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={Li} style={{fontSize: "24px"}} />
                    </a>
                </div>

            </div>
        </div>
    )
}