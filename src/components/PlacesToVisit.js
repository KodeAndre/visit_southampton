import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"

import Filter from './Filter'
import Card from "./Cards"

export default function Places() {

    const desktop = 
        <div id="placesWrapper">
                    <Filter />
                <div id="placesContent">
                <h2>Places and Events to visit and try out!</h2>
                <Card />
            </div>
        </div>
    
    const mobile = 
            <div id="placesContent">
                <h2>Places and Events to visit and try out!</h2>
                <Card />
            </div>

    if (window.matchMedia('(min-width: 769px)').matches) {
        return desktop
    } else {
        return mobile
    }
}