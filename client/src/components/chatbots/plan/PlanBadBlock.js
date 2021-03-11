import React from "react";

import "./Options.css";

const PlanBadBlock = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      stayedontrack: type,
      lastblockvisited: "Plan Goal 2"
    }));

    actionProvider.smalleramounts();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      stayedontrack: type,
      lastblockvisited: "Plan Goal 2"
    }));

    actionProvider.foodchoices();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Smaller Amounts")}
        >
          Smaller Amounts
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Different foods")}
        >
          Different foods
        </button>
      </div>
    </div>
  );
};


export default PlanBadBlock;