import React from "react";

import "./Options.css";

const DifferentFoods = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      what2change: type,
      lastblockvisited: "Different Foods"
    }));

    actionProvider.emotionalbehavioral();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      what2change: type,
      lastblockvisited: "Different Foods",
      waitingformsgflag: true
    }));

    actionProvider.somethingelsefoods();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Less fat")}
        >
          Less fat
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType1("Less sugar")}
        >
          Less sugar
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType1("Fewer carbs")}
        >
          Fewer carbs
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType1("Fewer Calories")}
        >
          Fewer Calories
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Something else")}
        >
          Something else
        </button>
      </div>
    </div>
  );
};

export default DifferentFoods;