import React from "react";

import "./Options.css";

const PlanGoodBlock = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      stayedontrack: type,
      lastblockvisited: "Plan Good Block",
      waitingformsgflag: true
    }));

    actionProvider.plangoodjournal();
  };

  const [disable, setDisable] = React.useState(false);
  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Something emotional")}
        >
          Something emotional
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Something physical")}
        >
          Something physical
        </button>
      </div>
    </div>
  );
};


export default PlanGoodBlock;