import React, {useState,useEffect} from 'react';
import "./Header.css";
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg';
import DropdownMenu from '../Dropdown/Dropdown';
import axios from 'axios';

const Header = () => {
  const [cards,setCards] = useState([]);
  const [counts,setCounts] = useState({
    delayed: 0,
    warning: 0,
    good:0
  });

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
          <DropdownMenu className="dropdown-menu"/>
          <span className="subtitle">Auditar Conta</span>
      </section>
      
      <section className="labels-container">
       <div className="delayed-total__block">        
          <div className="delayed-components">
            <span className="delayed-label"/>
            <span className="label-text__number">
              {counts.delayed}
            </span>
            <span className="label-text">cards</span>
          </div>
          
          
          <div className="labels-container__total">
            <span className="total-text">Total:</span> 
            {<span className="counts-text">
              {counts.good + counts.warning + counts.delayed}
              </span>}  
            <span className="counts-text">contas</span>
          </div>
       
       </div>
       
       <>
        <label className='warning-label'/> 
        <span>{counts.warning}</span><span className="label-text">cards</span>
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