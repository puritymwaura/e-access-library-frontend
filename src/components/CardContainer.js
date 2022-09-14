import React from "react";
import Card from "./Card";
import Row from 'react-bootstrap/Row';

function CardContainer({books, removeBook}) {
  return (
    <div className="book-card">
      <Row xs={4} md={4} className="g-8">
      {books.map(book => {
        return (
          <Card
            key={book.id} 
            book={book} 
            removeBook={removeBook} 
          />
        )
        })}
     </Row>   
    </div>
  );
      }
export default CardContainer;
