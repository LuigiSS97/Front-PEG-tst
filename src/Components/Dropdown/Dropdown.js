import React, {useState} from 'react';
import './dropdown.css';
import 'react-dropdown/style.css';


const DropdownMenu = (props) => {
  const [currentValue,setCurrentValue] = useState(0)

  const changeValue = (value) => {
    props.onSelectActivity(value)
    setCurrentValue(value)
  }
  return (
    <div>
      {props.activities.length && (
        <select onChange={e => changeValue(e.target.value)}  className="dropdown-menu"   value={currentValue}>
         {props.activities.map((activity,index) => <option key={activity.id} value={index}>{activity.name}</option>)}
        </select>
      )}
    </div>
  ); 
}

export default DropdownMenu;