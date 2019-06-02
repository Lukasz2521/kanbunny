import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from './pages/login/login.view';
import { Board } from './pages/board/board.view';
import { BoardsList } from './pages/boardsList/boardsList.view';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/board" component={Board} />
        <Route path="/boardsList" component={BoardsList} />
      </Router>
    </div>
  );
}

export default App;
