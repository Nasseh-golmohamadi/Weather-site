import axios from "axios";
import { useState } from "react";
import "./App.css";
import FormSide from "./components/FormSide";
import Material from "./components/Material";

function App() {
  const [apiValue, setApiValue] = useState();

  function handleButton(e, inputValue) {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=10e500a2733b2361f1e74acf08b3cccc&units=metric&cnt=7`
      )
      .then((res) => {
        setApiValue(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <FormSide handleButton={handleButton} />
      <Material apiValue={apiValue} setApiValue={setApiValue} />
    </>
  );
}

export default App;
