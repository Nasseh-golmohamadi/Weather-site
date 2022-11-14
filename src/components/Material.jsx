import React from "react";
import "../index.css";

export default function Material({ apiValue, setApiValue }) {
  return (
    <div>
      {apiValue ? (
        <div>
          <section className="material">
            <div>
              <h3>{apiValue.city.country}</h3>
              <h2>{apiValue.city.name}</h2>
              <p>{apiValue.list[0].wind.speed}</p>
            </div>
            <div>
              Temp :<div>{apiValue.list[0].main.temp}</div>
            </div>
            <div>
              humidity : <div>{apiValue.list[0].main.humidity}</div>
            </div>
            <div>
              pressure : <div>{apiValue.list[0].main.pressure}</div>
            </div>
          </section>

          <section className="material">
            <div>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${apiValue.list[0].weather[0].icon}@2x.png`}
              />
              <p>{apiValue.list[0].dt_txt}</p>
              <h4>{apiValue.list[0].main.temp_min}</h4>
            </div>
            <div>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${apiValue.list[1].weather[0].icon}@2x.png`}
              />
              <p>{apiValue.list[1].dt_txt}</p>
              <h4>{apiValue.list[1].main.temp_min}</h4>
            </div>
            <div>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${apiValue.list[2].weather[0].icon}@2x.png`}
              />
              <p>{apiValue.list[2].dt_txt}</p>
              <h4>{apiValue.list[2].main.temp_min}</h4>
            </div>
            <div>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${apiValue.list[3].weather[0].icon}@2x.png`}
              />
              <p>{apiValue.list[3].dt_txt}</p>
              <h4>{apiValue.list[3].main.temp_min}</h4>
            </div>
          </section>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
