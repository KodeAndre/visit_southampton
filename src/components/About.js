import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
import flag from "../media/souton.png"

export default function About() {

    return (
        <div>
            <p><b>Southampton</b> is a city and port in Hampshire, South East England. It is located on the southern coast of Great Britain, approximately 70 miles (110 km) south-west of London and 15 miles (24 km) west of Portsmouth.</p>
            <p>A major port, and close to the New Forest, it lies at the northernmost point of Southampton Water, at the confluence of the River Test and Itchen, with the River Hamble joining to the south.</p>
            <p>Southampton is noted for its as being the departure point for the RMS Titanic, and home to 500 of the people who perished onboard. The Spitfire was built in the city, and Southampton has a strong association with the Mayflower, being the departure point before the vessel was forced to return to Plymouth. More recently, Southampton is known the home port of some of the largest cruise ships in the world. Southampton is also one of the largest retail destinations in the South of England.</p>
            <p>The city was heavily bombed during the Second World War and was one of the major embarkation points for D-Day. It was also where troops left England for the Battle of Agincourt and was itself victim of a number of raids from French pirates in the Middle Ages, leading to the construction of the fortified town walls, many of which still stand today. Jane Austen also lived in Southampton for a number of years.</p>
            <p>Some notable employers in the city include the University of Southampton, Ordnance Survey, BBC South, Associated British Ports and Carnival UK.</p>
            <p>The unitary authority area of Southampton had a population of 253,651 at the 2011 census, making it one of the most populous cities in Southern England. Southampton forms part of the larger South Hampshire conurbation.</p>
            <img src={flag} width="50%" alt="flag of southampton"/>
        </div>
    )
}