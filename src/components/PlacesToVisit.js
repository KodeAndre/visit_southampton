import React, { useState } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"

export default function Places() {

    const [rest, setRest] = useState(0);
    const [eve, setEve] = useState(0);

    function handleChange1(e) {
        setRest({value: e.target.value})
        console.log("User filtered by: " + e.target.value)
    }

    function handleChange2(e) {
        setEve({value: e.target.value})
        console.log("User filtered by: " + e.target.value)
    }
    
    return (
        <div id="placesContent">
            <h2>Places and Events to visit and try out!</h2>

                <label htmlFor="restFilter">Food type: </label>

                <select name="restFilter" id="restFilter" defaultValue="default" onChange={handleChange1}>

                    <option value="default" disabled>Choose</option>

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

                <label htmlFor="eventFilter">Event type: </label>

                <select name="eventFilter" id="eventFilter" defaultValue="default" onChange={handleChange2}>

                    <option value="default" disabled>Choose</option>

                    <optgroup label="Restaurants">
                        <option value="Sydney">Sydney</option>
                        <option value="Melbourne">Melbourne</option>
                        <option value="Brisbane">Brisbane</option>
                    </optgroup>

                    <optgroup label="Event">
                        <option value="Fiesta">Fiesta</option>
                        <option value="Party">Party</option>
                        <option value="Orgy">Orgy</option>
                    </optgroup>

                    </select>

                <p>Filters applied: {rest.value}, {eve.value}</p>
        </div>
    )
}