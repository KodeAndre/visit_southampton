import React, {useEffect} from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch as Search } from '@fortawesome/free-solid-svg-icons'

import Hamburger from "./Hamburger"

export default function Navbar() {

    const [scrolled, setScrolled] = React.useState(false);
  
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150 ) {
        setScrolled(true);
      }
      if (offset <= 150 ) {
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    })
  
    let x=['navbar'];
    if (scrolled){
      x.push('scrolled');
    }

    return (
      <div className={x.join(" ")}>

          <div id="Hamburger">
            <Hamburger />
          </div>

                <div className="navleft">
                        <h1 id="Title">
                            <Link to="/">Visit Southampton</Link>
                        </h1>
                </div>
  
          <div className="navright">

                <h2 id="Home">
                    <Link to="/">Home</Link>
                </h2>

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

                <form action="https://visitsouthampton.co.uk/search-results" target="_blank">
                    <input className="searchfield" type="form" placeholder="Search..." name="q" />
                    <button className="searchbutton" type="submit"><FontAwesomeIcon icon={Search} /></button>
                </form>

                </div>
          </div>
  
      </div>
    )
  };