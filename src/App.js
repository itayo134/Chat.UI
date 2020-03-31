import React from 'react';
import logo from './logo.svg';
import {Button} from '@material-ui/core'
import './App.css';
import { Chat } from "./components/Chat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chat userName={"itay"} chatId="global_chat"></Chat>
       <Button color="primary">
         Start chatting
       </Button>
      </header>
    </div>
  );
}

export default App;
