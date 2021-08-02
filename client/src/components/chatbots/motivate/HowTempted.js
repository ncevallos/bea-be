import React from "react";

import "./AreyouReady.css";

const HowTempted = (props) => {
 // console.log(props);
  const { setState, actionProvider } = props;
  const setType1 = async (type, type2) => {
    setState((state) => ({
      ...state,
      temptedlevel: type,
      temptedlevelint: type2,
      lastblockvisited: "How Tempted"
    }));

    actionProvider.notAtAll();
  };
  const setType2 = async (type, type2) => {
    setState((state) => ({
      ...state,
      temptedlevel: type,
      temptedlevelint: type2,
      lastblockvisited: "How Tempted"
    }));

    actionProvider.slightSomewhat();
  };
  const setType3 = async (type, type2) => {
    setState((state) => ({
      ...state,
      temptedlevel: type,
      temptedlevelint: type2,
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
          onClick={() => setType1("Not at all", 0)}
        >
          Not at all
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Slightly", 1)}
        >
          Slightly
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Somewhat", 2)}
        >
          Somewhat
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType3("Very", 3)}
        >
          Very
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType3("Extremely - Help!", 4)}
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