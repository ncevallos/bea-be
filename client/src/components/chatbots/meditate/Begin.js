import React from "react";

import "./AreyouReady.css";

const Begin = (props) => {
  const options = [
    { text: "Yes", handler: props.actionProvider.videoPlay, id: 1 },
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

export default Begin;