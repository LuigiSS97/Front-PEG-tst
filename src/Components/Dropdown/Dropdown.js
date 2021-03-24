import React, {useState,useEffect} from 'react';
import './dropdown.css';
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const DropdownMenu = () => {
   const [activities,setActivities] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/activities')
      .then((response) =>{
        setActivities(response.data)
      });
  }, []);
  return (
    <div>
      {activities.length && (<>
    <Dropdown  className="dropdown-menu" value={activities[0].name} 
    options={activities.map(activity => <span>{activity.name}</span>)} 
    arrowClosed={<ArrowIcon/>}/></>)}
    </div>
  );
}

export default DropdownMenu;