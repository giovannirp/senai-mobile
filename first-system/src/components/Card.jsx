import React from "react";
import "./card.css";

const Card = () => {
  const cardsData = [
    {
      title: "Card 1",
      description: "Este é o primeiro card.",
      link: "#",
    },
    {
      title: "Card 2",
      description: "Este é o segundo card.",
      link: "#",
    },
    {
        title: "Card 3",
        description: "Este é o terceiro card.",
        link: "#",
    },
  ];
  
  return (
    <div className="card-container">
      {cardsData.map((card, index) => {
        console.log(index)
        return (
          <div className="card" key={index}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <a href={card.link}>Veja mais</a>
        </div>
        )
}     )}
    </div>
  );
};

export default Card;
