import React from "react";

import "./AreyouReady.css";

const OverIndulgeSL = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      overindulgeresult: type,
      lastblockvisited: "Over Indulge"
    }));

    actionProvider.sadLonely2();
  };

  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Much more sad/lonely")}
        >
          Much more sad/lonely
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("More sad/lonely")}
        >
          More sad/lonely
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Less sad/lonely")}
        >
          Less sad/lonely
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Much less sad/lonely")}
        >
          Much less sad/lonely
        </button>
      </div>
    </div>
  );
};

export default OverIndulgeSL;