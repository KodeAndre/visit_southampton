import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

// eslint-disable-next-line
import CardList from "./CardList"


export default function CardItem(props) {
    const card = props.card
    // eslint-disable-next-line
  return (
    <div id="cardStyle">{// eslint-disable-next-line
        <img className="cardImage" src={card.image} alt={card.name} />}
        <div id="cardTextContainer">
          <h2 className="cardName">{card.name}</h2>
          <p className="cardInfo">{card.info}</p>
        </div>
    </div>
  )
}