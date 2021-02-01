import React from 'react'

import "./AreyouReady.css";

const StretchMsgorVoice = (props) => {
  const options = [
    { text: "Message", handler: props.actionProvider.stretchMessage, id: 1 },
    // { text: "Voice", handler: props.actionProvider.handleLetsBegin, id: 1 },
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

export default StretchMsgorVoice;