import React from "react";

import "./AreyouReady.css";

const FeelBest2 = (props) => {
  const options = [
    { text: "Planning Phase", handler: props.actionProvider.feelBest3, id: 1 },
    { text: "Initial Eating Phase", handler: props.actionProvider.feelBest3, id: 2 },
    { text: "Fullness Phase", handler: props.actionProvider.feelBest3, id: 3 },
    { text: "After Eating Phase", handler: props.actionProvider.feelBest3, id: 4 }
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

export default FeelBest2;