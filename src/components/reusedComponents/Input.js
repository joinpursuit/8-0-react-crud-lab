import React from 'react';
import { handleFormInput } from '../../helperFunctions';

function Input({input, property, setInput}) {
    const upperProperty =`${property.charAt(0).toUpperCase()}${property.slice(1)}`
    const label = upperProperty.split(/(?=[A-Z])/).join(`, `).replace(`,`, ``)
    return (
        <>
        <label htmlFor= {property}>{label}:</label>
        <input
        type="text"
        id={property}
        value={input[`${property}`]}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />
      </>
    );
}

export default Input;