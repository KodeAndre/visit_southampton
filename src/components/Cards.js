import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

// eslint-disable-next-line
import CardList from "./CardList"
import CardItem from "./CardItem"


export default function Cards(props) {
  return (
    <div id="cards">
      {CardList.map(card => <CardItem card = {card} key={card.id}/>)}
    </div>
  );
}