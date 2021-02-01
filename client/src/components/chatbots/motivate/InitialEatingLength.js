import React from "react";

import "./AreyouReady.css";

const InitialEatingLength = (props) => {
  const options = [
    { text: "Up to 10 minutes", handler: props.actionProvider.fullnessIntro, id: 1 },
    { text: "10 to 30 minutes", handler: props.actionProvider.fullnessIntro, id: 2 },
    { text: "30 minutes to 1 hour", handler: props.actionProvider.fullnessIntro, id: 3 },
    { text: "1 to 2 hours", handler: props.actionProvider.fullnessIntro, id: 4 },
    { text: "More than 2 hours", handler: props.actionProvider.fullnessIntro, id: 5 }
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

export default InitialEatingLength;