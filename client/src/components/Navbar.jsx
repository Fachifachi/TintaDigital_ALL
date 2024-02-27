import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <main className='max-w-7,5xl mx-auto  p-4'>
        <header className='flex items-center justify-between'>
          <Link className="text-primary font-semibold text-2xl" to={'/'}>TintaDigital</Link>
          <nav className='flex items-center gap-4 text-gray-600 font-semibold'>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/shop'}>Libros</Link>
            <Link to={'/contacto'}>Contacto</Link>
          </nav>
          <nav className=' flex items-center gap-4 text-gray-500 font-semibold'>
            <Link to={'/login'} >Login</Link>
            <Link to={'/register'} className=" bg-primary rounded-full text-white px-8 py-2">Registro</Link>
          </nav>
        </header>
      </main>
    </>
  )
}

export default Navbar
