import React from "react";
import './App.css';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button className="notes">Notes</button>
                <button className="create">Create</button>
                <button className="reminder">Reminder</button>
                <button className="setting">Setting</button>
            </header>
            <body className="App-body">
            </body>
            <footer className="App-footer">
                <h2> Footer. Here there will contacts! </h2>
            </footer>
        </div>
    );
}

export default App;
