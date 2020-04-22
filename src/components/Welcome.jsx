import React, { useState } from "react";

function Welcome() {
  const [state, setState] = useState("");
  return (
    <div>
      <h1>{state}</h1>
      <input value={state} onChange={e => setState(e.target.value)}></input>
    </div>
  );
}

export default Welcome;
