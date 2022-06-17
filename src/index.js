import React from 'react';
import ReactDom from 'react-dom';


const App = (props) => {
    return <div className="app">
        <div className="profile">
            <h1>Profile</h1>
        </div>
        <div className="dark-mode">
            <h1> Dark Mode</h1>
        </div>
        <div className="tic-tac-toe">
            <h1>Tic-Tac-Toe</h1>
        </div>
        <div className="todo">
            <h1>Todo</h1>
        </div>
    </div>
}

ReactDom.render(
    <App />,
    document.getElementById('app'),
);