import React from 'react'

import "./AreyouReady.css";

const ChantMsgorVoice = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      mindfultype: type,
      mindfultype2: "Chant",
      lastblockvisited: "ChantMsgorVoice"
    }));

    actionProvider.chantMessage();
  };
  const setType2 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      mindfultype: type,
      mindfultype2: "Chant",
      lastblockvisited: "ChantMsgorVoice"
    }));

    actionProvider.stretchVoice();
  };
  const [disable, setDisable] = React.useState(false);
  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Message")}
        >
          Message
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Voice")}
        >
          Voice
        </button>
      </div>
    </div>
  );
};


export default ChantMsgorVoice;