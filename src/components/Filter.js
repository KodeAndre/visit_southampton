import React, { useState } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"

export default function Filter() {

    const [rest, setRest] = useState(0);
    const [eve, setEve] = useState(0);

    function handleChange1(e) {
        setRest({value: e.target.value})
        console.log("User filtered Food type by: " + e.target.value)
    }

    function handleChange2(e) {
        setEve({value: e.target.value})
        console.log("User filtered Event by: " + e.target.value)
    }

    return (
        <div>
            <div id="filterWrapper">

                <details>

                    <summary>
                        Filters
                    </summary>

                <label htmlFor="restFilter" className="filter">Food type: </label>

                <div>
                    <select name="restFilter" id="restFilter" defaultValue="default" onChange={handleChange1}>
            
                        <option value="" >None</option>
                        
                        <optgroup label="Restaurants">

                            <option value="Dolly Dimples">Dolly Dimples</option>
                            <option value="Peppes Pizza">Peppes Pizza</option>
                            <option value="Egon">Egon</option>

                        </optgroup>

                        <optgroup label="Fast Foods">

                            <option value="McDonalds">McDonalds</option>
                            <option value="Dominos">Dominos</option>
                            <option value="KFC">KFC</option>

                        </optgroup>

                    </select>
                </div>

                <label htmlFor="eventFilter" className="filter">Event type: </label>

                <div>
                    <select name="eventFilter" id="eventFilter" defaultValue="default" onChange={handleChange2}>

                            <option value="">None</option>
                            <option value="Fiesta">Fiesta</option>
                            <option value="Party">Party</option>
                            <option value="LAN">LAN</option>

                    </select>
                </div>

                </details>

                <div id="filterSumWrapper">
                    <p id="filterSum">Filters applied: <b>{rest.value}</b>, <b>{eve.value}</b></p>
                </div>

            </div>
        </div>
    )
}