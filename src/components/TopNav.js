import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';


export default function TopNav() {

    return (
        <div id="nav">
            <div id="navleft">
                <h1 id="Title">
                    <Link to="/">Visit Southampton</Link>
                </h1>
            </div>
            
            <div id="navright">
                <h2 id="About">
                    <Link to="About">About</Link>
                </h2>
                <h2 id="Places">
                    <Link to="PlacesToVisit">Places To Visit</Link>
                </h2>
                <h2 id="Map">
                    <Link to="Map">Map</Link>
                </h2>
                <div id="Search">
                    <input className="searchfield" type="text" placeholder="Search..."/>
                    <input className="searchbutton" type="submit" id="search" value="Submit"/>
                </div>
                
            </div>
        </div>
    )
}