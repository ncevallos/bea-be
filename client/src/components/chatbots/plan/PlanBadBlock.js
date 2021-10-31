import React from "react";

import "./Options.css";

const PlanBadBlock = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      stayedontrack: type,
      lastblockvisited: "Plan Goal 2"
    }));

    actionProvider.smalleramounts();
  };
  const setType2 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      stayedontrack: type,
      lastblockvisited: "Plan Goal 2"
    }));

    actionProvider.differentfoods();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Smaller Amounts")}
        >
          Smaller Amounts
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Different foods")}
        >
          Different foods
        </button>
      </div>
    </div>
  );
};


export default PlanBadBlock;