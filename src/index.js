import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import BoardState from './context/board/BoardState';
import AlertState from './context/alert/AlertState';

const StateContainer = () => {
  return (
    <BoardState>
      <AlertState>
        <App />
      </AlertState>
    </BoardState>
  );
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));