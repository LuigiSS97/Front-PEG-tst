import React from 'react';


const Pagination = ({cardsPerPage, totalCards, paginate}) => {
  const pageNumbers = [];
  
  for(let i = 1 ; i <= Math.ceil(totalCards / cardsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <a className="pagination-buttons" onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Pagination;