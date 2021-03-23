import React, {useState,useEffect} from 'react';
import "./Header.css";
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg';
import DropdownMenu from '../Dropdown/Dropdown';
import axios from 'axios';

const Header = () => {
  const [cards,setCards] = useState([])
  const [counts,setCounts] = useState({
    delayed: 0,
    warning: 0,
    good:0
  })

  useEffect(() => {
    axios.get('http://localhost:5000/cards')
      .then((response) =>{
        setCards(response.data);
        const newCountsDelayed = response.data.filter( card => card.status === "DELAYED").length
        const newCountsWarning = response.data.filter( card => card.status === "WARNING").length
        const newCountsGood = response.data.filter( card => card.status === "GOOD").length
        setCounts({
          delayed : newCountsDelayed,
          warning : newCountsWarning,
          good : newCountsGood
        })
      });
  }, []);
  
  return (
    
    <div className='header-container'>
      <section>
          <DropdownMenu/>
          <a className="subtitle">Auditar Conta</a>
      </section>
      <ArrowIcon className='arrow-icon'/>
      <section className="labels-container">
       <>
        <label className='delayed-label'/>
        {counts.delayed}<a className="label-text">cards</a>
       </>
       <>
        <label className='warning-label'/> 
        {counts.warning}<a className="label-text">cards</a>
       </> 
       <>
        <label className='good-label'/> 
        {counts.good}<a className="label-text">cards</a>
       </>
       </section>
    </div>
  );
}

export default Header;