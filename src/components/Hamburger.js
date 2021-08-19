import React from 'react'
// eslint-disable-next-line
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as HB, faTimes as Cross } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export default function Hamburger() {

    const [toggled, setToggled] = React.useState(false);
    
    let x=['menu'];

    if (toggled){
        x.push('toggled');
      }

    const [Icon, setIcon] = React.useState(HB);

    function iconChange() {
        if (toggled === true) {
            setIcon(HB);
            setToggled(false);
        }
        if (toggled === false) {
            setIcon(Cross);
            setToggled(true);
        }
    }

    return (
        <div>
            <FontAwesomeIcon icon={Icon} onClick={iconChange}/>

            <div className={x.join(" ")}>
                <h2 className="About">
                    <Link to="About" onClick={iconChange}>About</Link>
                </h2>
                <h2 className="PlacesPhone">
                    <Link to="PlacesToVisit" onClick={iconChange}>Places To Visit</Link>
                </h2>
                <h2 className="Map">
                    <Link to="Map" onClick={iconChange}>Map</Link>
                </h2>

            </div>
        </div>
    )
}