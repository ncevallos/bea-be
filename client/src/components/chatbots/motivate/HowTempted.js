import React from "react";

import "./AreyouReady.css";

const HowTempted = (props) => {
 // console.log(props);
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      temptedlevel: type,
      lastblockvisited: "How Tempted"
    }));

    actionProvider.notAtAll();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      temptedlevel: type,
      lastblockvisited: "How Tempted"
    }));

    actionProvider.slightSomewhat();
  };
  const setType3 = async (type) => {
    setState((state) => ({
      ...state,
      temptedlevel: type,
      lastblockvisited: "How Tempted",
      waitingformsgflag: true
    }));

    actionProvider.veryExtremely();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Not at all")}
        >
          Not at all
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Slightly")}
        >
          Slightly
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Somewhat")}
        >
          Somewhat
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType3("Very")}
        >
          Very
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType3("Extremely - Help!")}
        >
          Extremely - Help!
        </button>
      </div>
    </div>
  );
};

// const HowTempted = (props) => {
//   const options = [
//     { text: "Not at all", handler: props.actionProvider.notAtAll, id: 1 },
//     { text: "Slightly", handler: props.actionProvider.slightSomewhat, id: 2 },
//     { text: "Somewhat", handler: props.actionProvider.slightSomewhat, id: 3 },
//     { text: "Very", handler: props.actionProvider.veryExtremely, id: 4 },
//     { text: "Extremely - Help!", handler: props.actionProvider.veryExtremely, id: 5 }
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

export default HowTempted;