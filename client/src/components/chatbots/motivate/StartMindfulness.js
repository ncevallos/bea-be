import React from "react";

import "./AreyouReady.css";

const StartMindfulness = (props) => {
  const options = [
    { text: "Mindfulness Exercise", handler: props.actionProvider.mindfulness, id: 1 },
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

export default StartMindfulness;