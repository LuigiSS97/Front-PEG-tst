import React, {useState,useEffect} from 'react';
import "./Header.css";
import DropdownMenu from '../Dropdown/Dropdown';
import axios from 'axios';

const Header = (props) => {
  const [activities,setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState(0)
  
  const updateCurrentActivity = (value) => {
    setCurrentActivity(value)
    props.onChangeActivity(activities[value].id)
  }

  useEffect(() => {
    axios.get('http://localhost:5000/activities')
      .then((response) =>{
        setActivities(response.data);
      });
  }, []);
  

  return (
    
    <div className='header-container'>
      <section>
          <DropdownMenu activities={activities} onSelectActivity={value => updateCurrentActivity(value)} 
          className="dropdown-menu"
          />
          <span className="subtitle">Auditar Conta</span>
      </section>
      
      <section className="labels-container">
        <div className="delayed-total__block">        
          <div className="delayed-components">
            <span className="delayed-label"/>
            <span className="label-text__number">
              {activities.length && activities[currentActivity].cardsCount.delayed}
            </span>
            <span className="label-text">cards</span>
          </div>
          
          
          <div className="labels-container__total">
            <span className="total-text">Total:</span> 
            {<span className="counts-text">
            {activities.length && 
              activities[currentActivity].cardsCount.good +
              activities[currentActivity].cardsCount.warning +
              activities[currentActivity].cardsCount.delayed
            }
              </span>}  
            <span className="counts-text">contas</span>
          </div>
       
        </div>
       
        <>
          <label className='warning-label'/> 
          <span>{activities.length && activities[currentActivity].cardsCount.warning}
          </span>
          <span className="label-text">cards</span>
        </> 
        
        <>
          <label className='good-label'/> 
          {activities.length && activities[currentActivity].cardsCount.good}
          <span className="label-text">cards</span>
        </>
        </section>
      
    </div>
  );
}

export default Header;