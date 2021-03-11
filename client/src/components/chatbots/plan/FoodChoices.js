import React from "react";

import "./Options.css";

const FoodChoices = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Food Choices"
    }));

    actionProvider.lessfat();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Food Choices"
    }));

    actionProvider.lesssugar();
  };
  const setType3 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Food Choices"
    }));

    actionProvider.fewercarbs();
  };
  const setType4 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Food Choices"
    }));

    actionProvider.fewercalories();
  };
  const setType5 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Food Choices",
      waitingformsgflag: true
    }));

    actionProvider.somethingelse();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Less fat")}
        >
          Less fat
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Less sugar")}
        >
          Less sugar
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType3("Fewer carbs")}
        >
          Fewer carbs
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType4("Fewer Calories")}
        >
          Fewer Calories
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType5("Something else")}
        >
          Something else
        </button>
      </div>
    </div>
  );
};

export default FoodChoices;