import React, {useState,useEffect} from 'react';
import Cards from '../Cards/Cards'
import './CardBoard.css'
import axios from 'axios';
import Pagination from '../../Pagination';


const CardBoard = () => {
    const [cards,setCards] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(8)
    
    useEffect(() => {
      const fetchCards = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/cards');
        setCards(res.data);
        }  
        fetchCards();      
                  
            
        }, []);
  //get current posts
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard -  cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)
  
  //change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
   
  return (
    <>
      <body className="cardboard-body">
        {currentCards.map((card) => 
            <Cards card={card}/>
        )}
        
          
      
      </body>
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