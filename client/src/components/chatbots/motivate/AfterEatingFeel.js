import React from "react";

import "./AreyouReady.css";

const AfterEatingFeel = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type, type2) => {
    setState((state) => ({
      ...state,
      aefeel: type,
      aeint: type2,
      lastblockvisited: "After Eating Feel"
    }));

    actionProvider.afterEatingLength();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Great", 5)}
        >
          Great 😁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Good", 4)}
        >
          Good 🙂
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Neutral", 3)}
        >
          Neutral 😐
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Bad", 2)}
        >
          Bad 🙁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Really bad", 1)}
        >
          Really bad 😩
        </button>
      </div>
    </div>
  );
};

// const AfterEatingFeel = (props) => {
//   const options = [
//     { text: "Great 😁", handler: props.actionProvider.afterEatingLength, id: 1 },
//     { text: "Good 🙂", handler: props.actionProvider.afterEatingLength, id: 2 },
//     { text: "Neutral 😐", handler: props.actionProvider.afterEatingLength, id: 3 },
//     { text: "Bad 🙁", handler: props.actionProvider.afterEatingLength, id: 4 },
//     { text: "Really bad 😩", handler: props.actionProvider.afterEatingLength, id: 5 }
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

export default AfterEatingFeel;