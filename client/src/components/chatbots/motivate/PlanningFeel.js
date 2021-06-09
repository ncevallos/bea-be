import React from "react";

import "./AreyouReady.css";

const PlanningFeel = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      planphasefeel: type,
      lastblockvisited: "Planning Feel"
    }));

    actionProvider.planningPhaseLength();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Great")}
        >
          Great 😁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Good")}
        >
          Good 🙂
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Neutral")}
        >
          Neutral 😐
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Bad")}
        >
          Bad 🙁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Really bad")}
        >
          Really bad 😩
        </button>
      </div>
    </div>
  );
};

// const PlanningFeel = (props) => {
//   const options = [
//     { text: "Great 😁", handler: props.actionProvider.planningPhaseLength, id: 1 },
//     { text: "Good 🙂", handler: props.actionProvider.planningPhaseLength, id: 2 },
//     { text: "Neutral 😐", handler: props.actionProvider.planningPhaseLength, id: 3 },
//     { text: "Bad 🙁", handler: props.actionProvider.planningPhaseLength, id: 4 },
//     { text: "Really bad 😩", handler: props.actionProvider.planningPhaseLength, id: 5 }
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

export default PlanningFeel;