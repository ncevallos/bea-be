import React from "react";

import "./AreyouReady.css";

const FullnessLength = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      fullphaselength: type,
      lastblockvisited: "Fullness Length"
    }));

    actionProvider.afterEatingIntro();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Up to 10 minutes")}
        >
          Up to 10 minutes
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("10 to 30 minutes")}
        >
          10 to 30 minutes
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("30 minutes to 1 hour")}
        >
          30 minutes to 1 hour
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("1 to 2 hours")}
        >
          1 to 2 hours
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("More than 2 hours")}
        >
          More than 2 hours
        </button>
      </div>
    </div>
  );
};

// const FullnessLength = (props) => {
//   const options = [
//     { text: "Up to 10 minutes", handler: props.actionProvider.afterEatingIntro, id: 1 },
//     { text: "10 to 30 minutes", handler: props.actionProvider.afterEatingIntro, id: 2 },
//     { text: "30 minutes to 1 hour", handler: props.actionProvider.afterEatingIntro, id: 3 },
//     { text: "1 to 2 hours", handler: props.actionProvider.afterEatingIntro, id: 4 },
//     { text: "More than 2 hours", handler: props.actionProvider.afterEatingIntro, id: 5 }
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

export default FullnessLength;