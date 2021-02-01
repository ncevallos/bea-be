import React from "react";

import "./AreyouReady.css";

const PlanningIntro = (props) => {
  const options = [
    { text: "I've got it!", handler: props.actionProvider.planningPhase, id: 1 },
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

export default PlanningIntro;