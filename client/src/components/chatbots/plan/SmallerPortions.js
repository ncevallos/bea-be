import React from "react";

import "./Options.css";

const SmallerPortions = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Smaller Portions",
    }));

    actionProvider.stopfull();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Smaller Portions",
    }));

    actionProvider.morefilling();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Stop when full")}
        >
          Stop when full
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("More filling foods")}
        >
          More filling foods
        </button>
      </div>
    </div>
  );
};


export default SmallerPortions;