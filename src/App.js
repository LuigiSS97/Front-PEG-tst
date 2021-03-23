import React from 'react';
import './App.css';
import Sidebar from 'Components/Sidebar/Sidebar'
import Header from 'Components/Header/Header'
import Cards from 'Components/Cards/Cards'
function App() {
  const card = {
      "id": 0,
      "activityId": 1,
      "patientName": "Sudanka Bakalowits",
      "days": 27,
      "status": "DELAYED",
      "healthInsurance": "Convênio 1",
      "billSources": [
        { "label": "Conta", "value": 792915 },
        { "label": "Atend.", "value": "AT893701" },
        { "label": "Remessa", "value": 893701 },
        { "label": "Lote", "value": 893701 }
      ],
      "value": 5786.97,
      "pendencies": 5,
      "billTypes": ["Q", "R"],
      "showAttachment": true,
      "showDocument": true,
      "hasPendingDocument": false
    };
  return (
    <>
      <div className="app-body">
        <div >
          <Sidebar/>
            
        </div>
        <header>
          <Header/>
          
        </header>
      </div>
      <body>
        <Cards card={card}/>
      </body>
    </>
  );
}

export default App;
