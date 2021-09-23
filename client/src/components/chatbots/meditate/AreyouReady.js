import React from "react";

import "./AreyouReady.css";

const AreyouReady = (props) => {
  const options = [
    { text: "I'm ready", handler: props.actionProvider.handleLetsBegin, id: 1 },
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

export default AreyouReady;