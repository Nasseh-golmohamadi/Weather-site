import React, { useState } from "react";

export default function FormSide({ handleButton }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="City">Witch City:</label>
        <input
          type="text"
          id="City"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={(e) => handleButton(e, inputValue)}>Search</button>
      </form>
    </div>
  );
}
