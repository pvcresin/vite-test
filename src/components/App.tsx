import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;
