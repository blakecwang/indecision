import React from 'react'

const Action = (props) => {
  return (
    <div>
      <button
        disabled={props.optionsEmpty}
        onClick={props.handleChooseOption}>
        What should I do?
      </button>
    </div>
  );
};

export default Action;
