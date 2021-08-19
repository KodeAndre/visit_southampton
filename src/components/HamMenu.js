import React from 'react'
// eslint-disable-next-line
import Style from "../style.css"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export default function NavMenu() {

    return (
        <div>
            <h2 className="About">
                <Link to="About">About</Link>
            </h2>
            <h2 className="PlacesPhone">
                <Link to="PlacesToVisit">Places To Visit</Link>
            </h2>
            <h2 className="Map">
                <Link to="Map">Map</Link>
            </h2>
        </div>
    )
}