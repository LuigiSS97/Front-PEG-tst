import './App.css';
import Sidebar from 'Components/Sidebar/Sidebar'
import Header from 'Components/Header/Header'

function App() {
  return (
    <div className="app-body">
      <div >
        <Sidebar/>
          
      </div>
      <header>
        <Header/>
        
      </header>
    </div>
  );
}

export default App;
