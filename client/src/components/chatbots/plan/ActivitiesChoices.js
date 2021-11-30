import React from "react";
import { useHistory, Link } from 'react-router-dom';

import "./Options.css";

const ActivitiesChoices = (props) => {
  const { setState, actionProvider } = props;
  const [disable, setDisable] = React.useState(false);


  return (
    <div>
      <div className="learning-options-container">
        {/* <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Motivate")}
        >
          Motivate
        </button> */}
        <Link to='/chat/motivate' className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}>
                      Motivate
                  </Link>
        <Link to='/chat/meditate' className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}>
                      Meditate
                  </Link>
        {/* <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Meditate")}
        >
          Meditate
        </button> */}
      </div>
    </div>
  );
};

export default ActivitiesChoices;