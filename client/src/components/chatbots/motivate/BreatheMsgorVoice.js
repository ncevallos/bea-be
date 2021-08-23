import React from 'react'

import "./AreyouReady.css";

const BreatheMsgorVoice = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      mindfultype: type,
      mindfultype2: "Breathe",
      lastblockvisited: "BreatheMsgorVoice"
    }));

    actionProvider.breatheMessage();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      mindfultype: type,
      mindfultype2: "Breathe",
      lastblockvisited: "BreatheMsgorVoice"
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

// const StretchMsgorVoice = (props) => {
//   const options = [
//     { text: "Message", handler: props.actionProvider.stretchMessage, id: 1 },
//     // { text: "Voice", handler: props.actionProvider.handleLetsBegin, id: 1 },
//   ];

//   const optionsMarkup = options.map((option) => (
//     <button
//       className="learning-option-button"
//       key={option.id}
//       onClick={option.handler}
//     >
//       {option.text}
//     </button>
//   ));

//   return <div className="learning-options-container">{optionsMarkup}</div>;
// };

export default BreatheMsgorVoice;