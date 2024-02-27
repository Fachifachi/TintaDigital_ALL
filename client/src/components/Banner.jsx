import React from 'react'

const Banner = () => {
  return (

        <div
    className="flex flex-col items-center justify-center  bg-cover bg-center h-64"
    style={{ backgroundImage: 'url(../public/img/banner.jpg)' }} // Cambia la ruta a tu imagen
  >
    {/* Texto */}
    <p className="text-xl font-semibold text-white text-center mb-4">
      Los libros que buscas aquí
    </p>

    {/* Barra de búsqueda */}
    <input
      type="text"
      placeholder="Buscar libros..."
      className="w-1/2 px-4 py-2 mb-4 border rounded-md"
    />

    {/* Botón */}
    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-blue-600">
      Buscar
    </button>
  </div>
    
  )
}

export default Banner
