import React from 'react';
import { useState } from 'react';
//import { Link } from 'react-router-dom';
import './Form.css';
const Form = () => {
  // state for controlled input fields
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');

  // const history = useNavigate()
  // handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        price: price,
        genre: genre,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setTitle('');
        setPrice('');
        setGenre('');
      })
      .catch((err) => err.message);

    document.querySelector('form').reset();
  }
  return (
    <div class='container'>
      <form onSubmit={handleSubmit}>
        <h2 class='title'>Add a book below</h2>
        <div class='user-details'>
          <div class='input-box'>
            <span class='details'>Title</span>
            <input
              type='text'
              placeholder='Enter Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div class='input-box'>
            <span class='details'>Genre</span>
            <input
              type='text'
              placeholder='enter genre'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </div>
          <div class='input-box'>
            <span class='details'>Price</span>
            <input
              type='text'
              placeholder='Set Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          {/* <div class='input-box'>
            <span class='details'>setPictures</span>
            <input
              type='text'
              placeholder='Set Pictures'
              onChange={(e) => setPictures(e.target.value)}
              required
            /> */}
          {/* </div> */}
          <button className='button'>Add Book</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
