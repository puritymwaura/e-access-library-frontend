//import './SolarTypes.css';
import React, { useEffect, useState } from 'react';

export default function BooksContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className='card'>
      <div className='mx-[4%] mt-12'>
        <h2 className='font-averia text-3xl font-light'>Books Available</h2>
        <div className='w-full flex flex-wrap justify-between'>
          {books.map((book) => {
            return (
              <div className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4'>
                <div className='block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-96'>
                  <div className='relative pb-48 overflow-hidden'>

                      <img
                        src='https://media.istockphoto.com/photos/the-portuguese-royal-library-rj-picture-id692702340?s=612x612'
                        alt=''
                        className='absolute inset-0 h-52 w-full object-contain'
                      />
                    </div>
                  
                  <div className='p-4 uppercase'>
                    <h2 className='mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400'>
                      {book.title}
                    </h2>
                  </div>
                  <hr />
                  <div className='flex items-center justify-between p-4 text-xs'>
                    <span> {book.genre} </span>
                    <span> {book.price} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
// 