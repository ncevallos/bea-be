import React from "react";

import "./Options.css";

const HowDoYouFeel = (props) => {
  const { setState, actionProvider } = props;
    //uncommenting below will allow you to keep track ofthe state changes throughout
    //the chat
    // console.log(props);
  const setType1 = async (type, type2) => {
    setState((state) => ({
      ...state,
      howdoyoufeel: type,
      howdoyoufeelint: type2,
      lastblockvisited: "How Do You Feel",
    }));

    actionProvider.plangood();
  };
  const setType2 = async (type, type2) => {
    setState((state) => ({
      ...state,
      howdoyoufeel: type,
      howdoyoufeelint: type2,
      lastblockvisited: "How Do You Feel",
    }));

    actionProvider.planbad();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Great", 4)}
        >
          Great 😁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType1("Good", 3)}
        >
          Pretty Good 🙂
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Not good", 2)}
        >
          Not Good 🙁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Horrible", 1)}
        >
          Horrible 😩
        </button>
      </div>
    </div>
  );
};


export default HowDoYouFeel;