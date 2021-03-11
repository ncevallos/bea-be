import React from "react";

import "./Options.css";

const PlanGoodBlock = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      stayedontrack: type,
      lastblockvisited: "Plan Good Block",
      waitingformsgflag: true
    }));

    actionProvider.plangoodjournal();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Something emotional")}
        >
          Something emotional
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Something physical")}
        >
          Something physical
        </button>
      </div>
    </div>
  );
};


export default PlanGoodBlock;