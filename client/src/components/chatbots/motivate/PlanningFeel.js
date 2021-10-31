import React from "react";

import "./AreyouReady.css";

const PlanningFeel = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type, type2) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      planphasefeel: type,
      planphaseint: type2,
      lastblockvisited: "Planning Feel"
    }));

    actionProvider.planningPhaseLength();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Great", 5)}
        >
          Great 😁
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Good", 4)}
        >
          Good 🙂
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Neutral", 3)}
        >
          Neutral 😐
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Bad", 2)}
        >
          Bad 🙁
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Really bad", 1)}
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