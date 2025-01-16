import React from 'react';
import Link from 'next/link';


function Header() {
  return (
    <header className="flex w-full h-24">
      <nav className="nav grid grid-rows-1 grid-cols-4 justify-center items-center h-full w-full">
        <div className='flex justify-center items-center justify-self-start ml-6'>
          <h1 className="text-sm sm:text-sm font-bold">PACO'S</h1>
        </div>
        <ul className="flex flex-wrap text-xs items-center justify-center space-x-3 sm:space-x-2 md:space-x-4 lg:space-x-6 col-span-2 md:col-span-2">
          <li><Link href="#home" className="hover:text-yellow-500 ml-6">HOME</Link></li>
          <li><Link href="#carta">CARTA</Link></li>
          <li><Link href="#nosotros">NOSOTROS</Link></li>
          <li><Link href="#cocteles">COCTELES</Link></li>
          <li><Link href="#galeria">GALERIA</Link></li>
        </ul>
        <div className="flex items-center justify-center">LOGO</div>
      </nav>
    </header>
  );
}

export default Header;