import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center md:justify-end">
          <img src={imageURL} alt={bookTitle} className="w-full max-w-md rounded-lg" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{bookTitle}</h1>
            <p className="text-gray-500 mt-2">{authorName}</p>
            <p className="mt-4">{category}</p>
            <p className="mt-4">{bookDescription}</p>
          </div>
          <div className="mt-8">
            <a href={bookPdfUrl} className="text-sm text-blue-500">PDF Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
