import "./App.css";
import { Picker } from "./components/Picker";
import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row place-items-center justify-around">
        <div>
          <Picker value={value} setValue={setValue} />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
