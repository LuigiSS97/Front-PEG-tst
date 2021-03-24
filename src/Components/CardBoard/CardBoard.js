import React, {useState,useEffect} from 'react';
import Cards from '../Cards/Cards'
import './CardBoard.css'
import axios from 'axios';


const CardBoard = () => {
    const [cards,setCards] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/cards')
          .then((response) =>{
            console.log(response.data)
            setCards(response.data);            
            })
        }, []);
      
   
  return (
      <body className="cardboard-body">
        {cards.map((card) => 
            <Cards card={card}/>
        )}
        

      
      </body>
  );
}

export default CardBoard;