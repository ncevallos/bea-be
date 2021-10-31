import React from "react";

import "./AreyouReady.css";

const FeelBest3 = (props) => {
  // const options = [
  //   { text: "Great 😁", handler: props.actionProvider.feelBest4, id: 1 },
  //   { text: "Good 🙂", handler: props.actionProvider.feelBest4, id: 2 },
  //   { text: "Neutral 😐", handler: props.actionProvider.feelBest4, id: 3 },
  //   { text: "Bad 🙁", handler: props.actionProvider.feelBest4, id: 4 },
  //   { text: "Really bad 😩", handler: props.actionProvider.feelBest4, id: 5 }
  // ];

  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    actionProvider.feelBest4();
  };
  const [disable, setDisable] = React.useState(false);

  return   (
  <div className="learning-options-container">
    <button
      id="Great"
      className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
      disabled={disable}
      onClick={() => setType()}
    >
      Great 😁
    </button>
    <button
      id="Good"
      className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
      disabled={disable}
      onClick={() => setType()}
    >
      Good 🙂
    </button>
    <button
      id="Neutral"
      className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
      disabled={disable}
      onClick={() => setType()}
    >
      Neutral 😐
    </button>
    <button
      id="Bad"
      className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
      disabled={disable}
      onClick={() => setType()}
    >
      Bad 🙁
    </button>
    <button
      id="Really bad"
      className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
      disabled={disable}
      onClick={() => setType()}
    >
      Really bad 😩
    </button>
  </div>
  )};

export default FeelBest3;