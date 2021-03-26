import React, { useState } from 'react';
import Selector from './Selector';
import RepresentativeList from './RepresentativeList';
import RepresentativeInfo from './RepresentativeInfo';

function MainApp() {
  const [currentRep, setCurrentRep] = useState({});
  const [currentReps, setCurrentReps] = useState([]);

  async function startSearch(rep, state) {
    const resp = await fetch(`/${rep}/${state}`);
    const data = await resp.json();
    if (data.success) {
      setCurrentReps(data.results);
      setCurrentRep(data.results[0]);
    }
    else {
      // TODO: Display an error
      setCurrentReps([]);
      setCurrentRep({});
    }
  }

  function selectRep(idx) {
    setCurrentRep(currentReps[idx]);
  }

  return (<>
    <h3 className="my-rep">Who's my representative?</h3>
    <Selector startSearch={startSearch} />
    <div className="response-area">
      <RepresentativeList reps={currentReps} onSelect={selectRep} />
      <RepresentativeInfo rep={currentRep} />
    </div>
  </>);
};

export default MainApp;