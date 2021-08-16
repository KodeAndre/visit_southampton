import React, { useState } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"

export default function Places() {

    const [filter, setFilter] = useState(0);

    function handleChange(e) {
        setFilter({value: e.target.value})
        console.log("User filtered by: " + e.target.value)
    }
    
    return (
        <div id="placesContent">
            <h2>Places and Events to visit and try out!</h2>

                <label htmlFor="restFilter">Food type: </label>

                <select name="restFilter" id="restFilter" defaultValue="location" onChange={handleChange}>

                    <option value="location" disabled>Choose</option>

                    <optgroup label="Restaurants">
                        <option value="Sydney">Sydney</option>
                        <option value="Melbourne">Melbourne</option>
                        <option value="Brisbane">Brisbane</option>
                    </optgroup>

                    <optgroup label="Fast Foods">
                        <option value="McDonalds">McDonalds</option>
                        <option value="Dominos">Dominos</option>
                        <option value="KFC">KFC</option>
                    </optgroup>

                </select>

                <p>Filter applied: {filter.value}</p>

        </div>
    )
}