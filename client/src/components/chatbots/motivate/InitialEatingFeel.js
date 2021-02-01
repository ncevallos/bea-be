import React from "react";

import "./AreyouReady.css";

const InitialEatingFeel = (props) => {
  const options = [
    { text: "Great 😁", handler: props.actionProvider.initialEatingLength, id: 1 },
    { text: "Good 🙂", handler: props.actionProvider.initialEatingLength, id: 2 },
    { text: "Neutral 😐", handler: props.actionProvider.initialEatingLength, id: 3 },
    { text: "Bad 🙁", handler: props.actionProvider.initialEatingLength, id: 4 },
    { text: "Really bad 😩", handler: props.actionProvider.initialEatingLength, id: 5 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default InitialEatingFeel;