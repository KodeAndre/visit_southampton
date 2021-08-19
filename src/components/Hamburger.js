import React from 'react'
// eslint-disable-next-line
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as HB, faCross as Cross } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line
import Menu from "./HamMenu"

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
                <Menu />
            </div>
        </div>
    )
}