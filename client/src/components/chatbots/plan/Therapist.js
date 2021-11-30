import React from "react";
import { useHistory, Link } from 'react-router-dom';

import "./Options.css";

const Therapist = (props) => {
  const { setState, actionProvider } = props;
  const [disable, setDisable] = React.useState(false);
  const setType = async (type) => {
    setDisable(true)

    actionProvider.branching();
  };

  return (
    <div>
      <div className="learning-options-container">
        {/* <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Motivate")}
        >
          Find a Therapist
        </button> */}
        <Link to='/therapist' className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}>
                      Find a Therapist
        </Link>
      </div>
    </div>
  );
};

export default Therapist;