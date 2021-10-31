import React from "react";

import "./Options.css";

const DifferentFoods = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      what2change: type,
      lastblockvisited: "Different Foods"
    }));

    actionProvider.emotionalbehavioral();
  };
  const setType2 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      what2change: type,
      lastblockvisited: "Different Foods",
      waitingformsgflag: true
    }));

    actionProvider.somethingelsefoods();
  };
  const [disable, setDisable] = React.useState(false);


  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Less fat")}
        >
          Less fat
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Less sugar")}
        >
          Less sugar
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Fewer carbs")}
        >
          Fewer carbs
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Fewer Calories")}
        >
          Fewer Calories
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Something else")}
        >
          Something else
        </button>
      </div>
    </div>
  );
};

export default DifferentFoods;