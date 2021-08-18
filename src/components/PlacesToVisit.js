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
            <details>
                <summary>
                    Click for list of filters
                </summary>
                <Filter />
            </details>
            <p>proof that the filter isnt pushing content</p>
        </div>
    )
}