import React from 'react'

import "./AreyouReady.css";

const StretchMsgorVoice = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      mindfultype: type,
      lastblockvisited: "StretchMsgorVoice"
    }));

    actionProvider.stretchMessage();
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
          onClick={() => setType("Voice")}
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

export default StretchMsgorVoice;