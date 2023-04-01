import React, { useEffect, useState } from "react";
import Wheel from './components/Wheel';
import OrganizingCommitte from './components/OrganizingCommitte';
import Backend from './backend';
import { getData } from "./helpers/getData.js"

function App() {
  const [key, setKey] = useState("")  
  const data = getData(key)

  return (
    <div className="App">
      <Wheel setKey={setKey} />
      <OrganizingCommitte data={data} />
      {/* <Backend /> */}
    </div>
  );
}

export default App;
