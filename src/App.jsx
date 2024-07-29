import { useState } from 'react';
import Board from './components/Board';
import './App.css';
import Game from './components/Game';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>Vite + React</h2>
      <Game />
    </>
  );
}

export default App;
