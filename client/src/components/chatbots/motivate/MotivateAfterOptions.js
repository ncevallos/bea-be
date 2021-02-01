import React from 'react'

import "./AreyouReady.css";

const MotivateAfterOptions = (props) => {
  const options = [
    { text: "Better", handler: props.actionProvider.thankYouDemo, id: 1 },
    { text: "Same", handler: props.actionProvider.thankYouDemo, id: 2 },
    { text: "Worse", handler: props.actionProvider.thankYouDemo, id: 3 }
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

export default MotivateAfterOptions;
