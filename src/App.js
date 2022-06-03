import { useEffect, useState } from "react";
import Memory from "./Memory";
import TicTacToe from "./TicTacToe";


function App() {
  const [show, setShow]=useState({ticTacToe:false, memory:false})

  const changeShow = (game) =>{
    show[game] = !show[game]
    setShow({...show})
  }
  
  return (
    <div className="parent">
      <h1>Games</h1>
      <button onClick={()=>{changeShow('ticTacToe')}}>Show Tic Tac Toe</button>
      {show.ticTacToe && <TicTacToe/>}
      <br/>
      <button onClick={()=>{changeShow('memory')}}>Show Memory</button>
      {show.memory && <Memory/>}
    </div>
  );
}

export default App;
