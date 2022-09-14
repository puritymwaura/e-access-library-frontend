import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const bookAPI = " http://localhost:9292/books";

function Book({ book, removeBook}) {
  const { title, genre, price } = book;
  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${bookAPI}/${book.id}`, {
      method: 'DELETE',
    });
    removeBook(book);
  }
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant='top' src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{genre}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Button variant='danger' onClick={onDeleteClick}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
export default Book;