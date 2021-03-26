import React, { useState } from 'react';
import StateSelector from './StateSelector';
import RepresentativeSelector from './RepresentativeSelector';

const Selector = ({ startSearch }) => {
  const [currentState, setCurrentState] = useState();
  const [currentRep, setCurrentRep] = useState();

  function changeState(newState) {
    setCurrentState(newState);
  }

  function changeRep(newRep) {
    setCurrentRep(newRep);
  }

  return (
    <div class="selector">
      <span>Representative: </span>
      <RepresentativeSelector value={currentRep} onChange={changeRep} />
      <br/>
      <span>State: </span >
      <StateSelector value={currentState} onChange={changeState} />
      <br/>
      <button disabled={!currentState || !currentRep} value="UT" onClick={() => startSearch(currentRep, currentState)}>Search</button>
    </div>
  );
};

export default Selector;
