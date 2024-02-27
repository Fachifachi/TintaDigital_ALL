import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router

function BookCards() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/all-books');
      setBooks(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map(book => (
        <Link to={`/book/${book._id}`} key={book._id} className="p-4 border rounded-md shadow-md">
          <img src={book.imageURL} alt={book.bookTitle} className="w-full h-36 object-cover rounded-md" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{book.bookTitle}</h2>
            <p className="text-sm text-gray-500">{book.authorName}</p>
            <p className="mt-2 text-sm">{book.category}</p>
            <a href={book.bookPdfUrl} className="mt-2 text-sm text-blue-500">PDF Link</a>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BookCards;
