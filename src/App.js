import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from './pages/login/login.view';
import { Board } from './pages/board/board.view';
import { BoardsList } from './pages/boardsList/boardsList.view';
import HeaderContainer from './components/header/header.container';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <Container maxWidth="false">
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/board" component={Board} />
          <Route path="/boardsList" component={BoardsList} />
        </Router>
      </Container>
    </div>
  );
}

export default App;
