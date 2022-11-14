import React from "react";
import "../index.css";

export default function Material({ apiValue, setApiValue }) {
  return (
    <>
      {apiValue ? (
        <div>
          Country: <h2>{apiValue.city.country}</h2>
          City :<h3>{apiValue.city.name}</h3>
          Temp :<div>{apiValue.list[0].main.temp}</div>
          humidity : <div>{apiValue.list[0].main.humidity}</div>
          pressure : <div>{apiValue.list[0].main.pressure}</div>
          Wind : <div>{apiValue.list[0].wind.speed}</div>
          
          <div style={{ background: "green" }}>
            <img
              className="icon"
              src={`http://openweathermap.org/img/wn/${apiValue.list[4].weather[0].icon}@2x.png`}
            />
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
