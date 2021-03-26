import React, { useState } from 'react';

function RepresentativeList({ reps, onSelect }) {
  function selectRep(key) {
    return () => {
      if (onSelect) {
        onSelect(key);
      }
    }
  }

  return (
    <div>
      <h2>List of representatives</h2>
      <table className="rep-list">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Party</th>
        </tr>
        {reps.map(({name, party}, key) => <tr key={key} onClick={selectRep(key)}>
          <td>{key+1}</td>
          <td>{name}</td>
          <td className="center">{party[0]}</td>
        </tr>)}
      </table>
    </div>
  );
};

export default RepresentativeList;