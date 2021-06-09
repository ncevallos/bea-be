import React from "react";

import "./AreyouReady.css";

const PlanningIntro = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      vistype: type,
      lastblockvisited: "Planning Intro",
      waitingformsgflag: true
    }));

    actionProvider.planningPhase();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Planning")}
        >
          I've got it!
        </button>
      </div>
    </div>
  );
};


// const PlanningIntro = (props) => {
//   const options = [
//     { text: "I've got it!", handler: props.actionProvider.planningPhase, id: 1 },
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

export default PlanningIntro;