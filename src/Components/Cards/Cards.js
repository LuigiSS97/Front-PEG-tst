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
      return "red"
    }
  }
  return (
      <div className="card">
      <section className="card-body">
        <div className="card-header__container">
          <span id="card-days" className={getClass(card.status)}>
            <nav>{card.days}</nav>
            <a>
              Dias
            </a>
          </span>
          <div id="patient-data__container">
            <h4 className="card-patient">{card.patientName}</h4>
            <a className="card-insurance">{card.healthInsurance }</a>
          </div>
          <input type="checkbox" className="card-checkbox"/>
        </div>
          <div className="card-data__container">
            <div className="card-data__content">
              <a className="card-data__title">Conta</a>
              <h5>{card.billSources
                .filter(account => account.label === "Conta")
                .map(ac => ac.value
                )}
              </h5>
            </div>
            <div className="card-data__content">
                <a className="card-data__title">Atend.</a>
                <h5>{card.billSources
                  .filter(atend => atend.label === "Atend.")
                  .map(at => at.value
                  )}
                </h5>
              </div>
              <div className="card-data__content">
                <a className="card-data__title">Remessa</a>
                <h5>{card.billSources
                  .filter(shipping => shipping.label === "Remessa")
                  .map(rm => rm.value
                  )}
                </h5>
              </div>
              <div className="card-data__content">
                <a className="card-data__title">Lote</a>
                <h5>{card.billSources
                  .filter(batch => batch.label === "Lote")
                  .map(bt => bt.value
                  )}</h5>
              </div>
          </div>
          <div className="card-value__container">
            <h2 className="card-value">R$ {card.value}</h2>
            <span className="card-pendencies">{card.pendencies}pendências</span>
          </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-billtags">
            {billTypes.includes("Q") &&(<a className="q-tag">Q</a>)}
            {billTypes.includes("R") &&(<a className="r-tag">R</a>)}
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