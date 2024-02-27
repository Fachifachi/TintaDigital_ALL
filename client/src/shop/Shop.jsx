import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect( ()  => {
  fetch ("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));}, [])
  return (
    <div className=' mt-28 px-4 lg:px24'>
      <h2 className=' text-5xl font-bold text-center'>Libros</h2>
     <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>{
      books.map(book =>   <Card
        className="max-w-sm"
        
      >
        
        <img src={book.imageURL} alt=""/>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {book.bookTitle}
          </h5>
        </a>
       
        <p>{book.bookDescription.length > 100 ? book.bookDescription.substring(0, 100) + '...' : book.bookDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </a>
        </div>
      </Card>)
      }

     </div>
    </div>
    
    
  )
}

export default Shop
