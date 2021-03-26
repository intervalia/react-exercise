import React, { useState } from 'react';
import states from './states';

const options = Object.entries(states).map(([value, label]) => ({value, label}));
options.unshift({value:'', label: '-Select-'});

function StateSelector({onChange}) {
  const [currentState, setCurrentState] = useState();

  const changeState = (newState) => {
    setCurrentState(newState);
    if (onChange) {
      onChange(newState);
    }
  }

  return (
    <select
      onChange={(evt) => changeState(evt.target.value)}
      value={currentState}
    >
      {options.map((e, key) => {
        return <option key={key} value={e.value}>{e.label}</option>;
      })}
    </select>
  );
};

export default StateSelector;