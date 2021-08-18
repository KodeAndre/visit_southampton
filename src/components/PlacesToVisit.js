import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"

import Filter from './Filter'

export default function Places() {

    return (
        <div id="placesContent">
            <h2>Places and Events to visit and try out!</h2>
            <Filter />
        </div>
    )
}