import React from 'react';
import "./Header.css";
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg'


const Header = () => {
  return (
      
      <div className='header-container'>
        <section>
            <h2>Unidade Internação I</h2>
            <a>Auditar Conta</a>
        </section>
        <ArrowIcon className='arrow-icon'/>
      </div>
  );
}

export default Header;