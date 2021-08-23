import React from 'react'

import "./AreyouReady.css";

const MotivateAfterOptions = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      mindfulresult: type,
      lastblockvisited: "Motivate After Options"
    }));

    actionProvider.afterBetter();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      mindfulresult: type,
      lastblockvisited: "Motivate After Options"
    }));

    actionProvider.afterSame();
  };
  const setType3 = async (type) => {
    setState((state) => ({
      ...state,
      mindfulresult: type,
      lastblockvisited: "Motivate After Options"
    }));

    actionProvider.afterWorse();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Better")}
        >
          Better
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Same")}
        >
          Same
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType3("Worse")}
        >
          Worse
        </button>
      </div>
    </div>
  );
};

// const MotivateAfterOptions = (props) => {
//   const options = [
//     { text: "Better", handler: props.actionProvider.thankYouDemo, id: 1 },
//     { text: "Same", handler: props.actionProvider.thankYouDemo, id: 2 },
//     { text: "Worse", handler: props.actionProvider.thankYouDemo, id: 3 }
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

export default MotivateAfterOptions;
