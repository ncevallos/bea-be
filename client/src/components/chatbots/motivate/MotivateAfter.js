import React from "react";

import "./AreyouReady.css";

const MotivateAfter = (props) => {
  const options = [
    { text: "Move Forward", handler: props.actionProvider.motivateAfter, id: 1 },
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

export default MotivateAfter;