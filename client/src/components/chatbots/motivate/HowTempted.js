import React from "react";

import "./AreyouReady.css";

const HowTempted = (props) => {
  const options = [
    { text: "Not at all", handler: props.actionProvider.notAtAll, id: 1 },
    { text: "Slightly", handler: props.actionProvider.slightSomewhat, id: 2 },
    { text: "Somewhat", handler: props.actionProvider.slightSomewhat, id: 3 },
    { text: "Very", handler: props.actionProvider.veryExtremely, id: 4 },
    { text: "Extremely - Help!", handler: props.actionProvider.veryExtremely, id: 5 }
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

export default HowTempted;