import React from 'react';
import './App.css';
import Sidebar from 'Components/Sidebar/Sidebar';
import Header from 'Components/Header/Header';
import CardBoard from 'Components/CardBoard/CardBoard';
function App() {
  
  return (
    <>
    <body className="app-body">
        <div className="app-body__board">
          <Sidebar/>
        </div>
        <div className="body-container__main">
          <Header/>
          <CardBoard/>
        </div>
        
        
      </body>
    </>
  );
}

export default App;
