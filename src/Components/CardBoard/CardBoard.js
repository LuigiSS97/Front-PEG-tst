import React, {useState,useEffect} from 'react';
import Cards from '../Cards/Cards'
import './CardBoard.css'
import axios from 'axios';
import Pagination from '../../Pagination';



const CardBoard = ({currentActivity}) => {
    const [cards,setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(8)
    
    useEffect(() => {
      const fetchCards = async () => {
        const res = await axios.get('http://localhost:5000/cards');
        setCards(res.data);
        }  
        fetchCards();      
                  
            
        }, []);
    
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard -  cardsPerPage;
  const sortedCards = cards.sort((a, b) => b.days - a.days);
  const filteredCards = sortedCards.filter(card => card.activityId === currentActivity);
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
  return (
    <>
      <span className="cardboard-container">
        <span className="cardboard-body">
          {currentCards.map((card) => 
              <Cards key={card.id} card={card}/>
          )}
        </span>
      </span>
     
      <footer className="pagination">
        <Pagination paginate={paginate} 
        cardsPerPage={cardsPerPage} 
        totalCards={cards.length}
        />
      </footer>
    </>
  );
}

export default CardBoard;