import React, { useState } from 'react';

function RepresentativeSelector({value, onChange}) {
  const [currentChoice, setCurrentChoice] = useState(value);

  const changeChoice = (newChoice) => {
    setCurrentChoice(newChoice);
    if (onChange) {
      onChange(newChoice);
    }
  }

  return (
    <select onChange={(evt) => changeChoice(evt.target.value)} value={currentChoice} >
      <option value="">- Select -</option>
      <option value="representatives">House</option>
      <option value="senators">Senate</option>
    </select>
  );
};

export default RepresentativeSelector;