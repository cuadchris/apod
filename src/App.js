import "./App.css";
import { Picker } from "./components/Picker";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <div className="grid sm:grid-cols-2 sm:h-screen gap-2 p-4">
        <div className="grid place-items-center">
          <Picker value={value} setValue={setValue} />
        </div>
        <div className="grid place-items-center">
          <h1>{value.toString()}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
