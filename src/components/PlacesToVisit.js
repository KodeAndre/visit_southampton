import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"

export default function Places() {


    
    return (
        <div id="placesContent">
            <h2>Places and Events to visit and try out!</h2>
            
            <form>
                <label htmlFor="places">Filter by place: </label>

                <select name="places" id="places" defaultValue="location">

                    <option value="location" disabled>Choose</option>

                    <optgroup label="Australian Places">
                        <option value="Sydney">Sydney</option>
                        <option value="Melbourne">Melbourne</option>
                        <option value="Brisbane">Brisbane</option>
                    </optgroup>

                    <optgroup label="Norwegian Places">
                        <option value="Bergen">Bergen</option>
                        <option value="Oslo">Oslo</option>
                        <option value="Trondheim">Trondheim</option>
                    </optgroup>

                </select>

            </form>
        </div>
    )
}