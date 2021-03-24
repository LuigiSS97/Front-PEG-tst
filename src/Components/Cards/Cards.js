import React from 'react';
import './Cards.css';
import {ReactComponent as DocumentIcon} from '../../assets/images/document.svg';
import {ReactComponent as DocumentPendedIcon} from '../../assets/images/unread_document.svg';
import {ReactComponent as AttachmentIcon} from '../../assets/images/attachment.svg';


const Cards = ({card}) => {
  const hasPendingDocs = card.hasPendingDocument;
  const attachment = card.showAttachment;
  const billTypes = card.billTypes;

  function getClass(status) {
    if(status === "DELAYED"){
      return "red"
    }
    if(status === "WARNING"){
      return "yellow"
    }
    if(status === "GOOD"){
      return "green"
    }
  }
  return (
      <div className="card">
      <section className="card-body">
        
        <div className="card-header__container">
          
          <span id="card-days" className={getClass(card.status)}>
            <span className="card-days__number">{card.days}</span>
            <span className="card-days__word">
              Dias
            </span>
          </span>
          
          <div className="card-header__container2">
            <div id="patient-data__container">
              <h4 className="card-patient">{card.patientName}</h4>
              <span className="card-insurance">{card.healthInsurance }</span>
              
            </div>
            <input type="checkbox" className="card-checkbox"/>
          </div>
       
        </div>
        
        <div className="card-data__container">
            
            {card.billSources.map( billSource =>
              <div className="card-data__content">
              <span className="card-data__title">{billSource.label}</span>
              <h5>{billSource.value}</h5>
            </div>)}
        </div>
        
        <div className="card-value__container">
            <h2 className="card-value">R$ {card.value}</h2>
            <span className="card-pendencies"><span className="pendencies-value">
              {card.pendencies}
            </span>pendências</span>
          </div>
      
      </section>
      
      <footer>
        <div className="footer-container">
          <div className="footer-billtags">
            {billTypes.map( billType =>(<span className="tag">{billType}</span>))}
          </div>
          
          <div className="footer-icons">
            {attachment &&(<AttachmentIcon/>)}
            {hasPendingDocs ? <DocumentPendedIcon/> : <DocumentIcon/>}
          </div>
        </div>
      </footer>

      </div>
  );
}

export default Cards;