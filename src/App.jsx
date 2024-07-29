import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>Vite + React</h2>
    </>
  );
}

export default App;
