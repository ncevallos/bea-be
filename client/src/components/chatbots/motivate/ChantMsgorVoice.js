import React from 'react'

import "./AreyouReady.css";

const ChantMsgorVoice = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      mindfultype: type,
      mindfultype2: "Chant",
      lastblockvisited: "ChantMsgorVoice"
    }));

    actionProvider.chantMessage();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      mindfultype: type,
      mindfultype2: "Chant",
      lastblockvisited: "ChantMsgorVoice"
    }));

    actionProvider.stretchVoice();
  };
  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Message")}
        >
          Message
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Voice")}
        >
          Voice
        </button>
      </div>
    </div>
  );
};


export default ChantMsgorVoice;