import React,{useState} from 'react';
import './App.css';
import Sidebar from 'Components/Sidebar/Sidebar';
import Header from 'Components/Header/Header';
import CardBoard from 'Components/CardBoard/CardBoard';




function App() {
  const [currentActivity, setCurrentActivity] = useState(1)
  return (
    <>
    <span className="app-body">
        <div className="app-body__board">
          <Sidebar/>
        </div>
        <div className="body-container__main">
          <Header onChangeActivity={(id) => setCurrentActivity(id)}/>
          <CardBoard currentActivity={currentActivity}/>
        </div>
        
        
      </span>
    </>
  );
}

export default App;
