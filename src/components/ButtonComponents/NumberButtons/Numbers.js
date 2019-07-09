import React from "react";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file

import { numbers } from "../../../data";

export const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [numbersList, setNumber] = useState(numbers);

  console.log("Numbers this.state", this.state);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */}
      {numbersList.map(number => {
        return <NumberButton number={number} setNumber={setNumber} />;
      })}
    </div>
  );
};
