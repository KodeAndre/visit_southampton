import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"

import Filter from './Filter'
import Testmodel from "./Model"

export default function Places() {

    return (
        <div id="placesWrapper">
                    <Filter />
                <div id="placesContent">
                <h2>Places and Events to visit and try out!</h2>
                <p>proof that the filter isnt pushing content</p>
                <div>
                    <Testmodel />
                </div>
            </div>
        </div>
    )
}