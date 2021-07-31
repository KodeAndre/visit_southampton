import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
import demo from "../media/demo.mp4"

import Card from "./Card"

export default function Content() {

    return (
        <div>
            <div>
                <video autoPlay muted loop width="100%" height="auto" poster="https://dc-southampton.s3.amazonaws.com/videos/southampton-hero-video-poster.jpg?mtime=20190926112353&focal=none">
                    <source src={demo} type="video/mp4"/>
                </video>
            </div>

            <div>
                <span className="material-icons" id="arrowdown">
                south
                </span>
            </div>

            <div>
                <Card />
            </div>
            
        </div>
    )
}