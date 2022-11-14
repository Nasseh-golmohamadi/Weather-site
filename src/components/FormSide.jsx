import React, { useState } from "react";

export default function FormSide({ handleButton }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form>
        <h2>Write a City to Gain Weather Type:</h2>
        <input
        className="input"
          type="text"
          id="City"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button" onClick={(e) => handleButton(e, inputValue)}>Search</button>
      </form>
    </div>
  );
}
