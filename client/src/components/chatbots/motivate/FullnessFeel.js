import React from "react";

import "./AreyouReady.css";

const FullnessFeel = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type, type2) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      fullphasefeel: type,
      fullphaseint: type2,
      lastblockvisited: "Fullness Feel"
    }));

    actionProvider.fullnessLength();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Great", 5)}
        >
          Great 😁
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Good", 4)}
        >
          Good 🙂
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Neutral", 3)}
        >
          Neutral 😐
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Bad", 2)}
        >
          Bad 🙁
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Really bad", 1)}
        >
          Really bad 😩
        </button>
      </div>
    </div>
  );
};

export default FullnessFeel;