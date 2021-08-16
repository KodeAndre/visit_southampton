import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram as Insta } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <div id="footer">
            <div id="Creator">
                <h2>Made by Echo</h2>
            </div>

            <div id="Info">
                <h3>
                    Our Socials
                </h3>
                
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={Insta} style={{fontSize: "24px"}} />
                </a>

            </div>
        </div>
    )
}