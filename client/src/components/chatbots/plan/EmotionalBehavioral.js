import React from "react";

import "./Options.css";

const EmotionalBehavioral = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      influencedeating: type,
      lastblockvisited: "Emotional Behavioral",
      waitingformsgflag: true
    }));

    actionProvider.planbadjournal();
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


export default EmotionalBehavioral;