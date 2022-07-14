import './App.css';
import { useState } from 'react';
import QRCodeCanvas from './QRCodeCanvas';

function App() {
  const [text, setText] = useState("Link here")

  return (
    <div className="App">
      <input onChange={element=>setText(element.target.value)}  value={text}></input>
      <QRCodeCanvas text={text}/>
    </div>
  );
}

export default App;
