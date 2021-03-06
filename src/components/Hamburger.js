import React from 'react'
// eslint-disable-next-line
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as HB, faTimes as Cross } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export default function Hamburger() {

    const [toggled, setToggled] = React.useState(false);

    const [Icon, setIcon] = React.useState(HB);

    const [scrolled, setScrolled] = React.useState(false);

    let x=['menu'];

    if (toggled){
        x.push('toggled');
      }

      const handleScroll = () => {
        if (window.matchMedia("(min-width: 769px)").matches){
          const offset = window.scrollY;
          if (offset > 150 ) {
            setScrolled(true);
          }
          if (offset <= 150 ) {
            setScrolled(false);
          }
        } 
        if (window.matchMedia("(max-width: 425px)").matches) {
          const offset = window.scrollY;
          if (offset > 100 ) {
            setScrolled(true);
          }
          if (offset <= 100 ) {
            setScrolled(false);
          }
        } // dont remove the if under this line, it fixes a memory leak.
        if (window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches) {
          const offset = window.scrollY;
          if (offset > 100 ) {
            setScrolled(true);
          }
          if (offset <= 100 ) {
            setScrolled(false);
          } // dont remove the above if, it fixes a memory leak.
        }
      }

    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    })
  
    if (scrolled){
      x.push('scrolledBurg');
    }

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