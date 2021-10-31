import React from "react";

import "./Options.css";

const SmallerAmounts = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      what2change: type,
      lastblockvisited: "Smaller Amounts",
    }));

    actionProvider.emotionalbehavioral();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("A little less")}
        >
          A little less
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Moderately less")}
        >
          Moderately less
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Substantially less")}
        >
          Substantially less
        </button>
      </div>
    </div>
  );
};


export default SmallerAmounts;