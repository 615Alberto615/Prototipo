import { useState } from 'react';
import logo from '../assets/logo.png';

// iconos
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Inicio", path: "home", type: "scroll" },
    { link: "Servicios", path: "servicios", type: "scroll" },
    { link: "Información", path: "informacion", type: "scroll" },
    { link: "Biblioteca", path: "/biblioteca", type: "route" }, // 👈 NUEVA RUTA
  ];

  return (
    <>
      <nav className='bg-white lg:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 z-50'>
  <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
    <div className='flex space-x-14 items-center'>
      <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
        <img src={logo} alt="" className='w-10 inline-block items-center' /><span>NEBULA</span>
      </a>

      <ul className="lg:flex space-x-12 hidden">
        {navItems.map(({ link, path, type }) => (
          type === "scroll" ? (
            <ScrollLink activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</ScrollLink>
          ) : (
            <RouterLink to={path} key={link} className='block hover:text-gray-300 cursor-pointer'>{link}</RouterLink>
          )
        ))}
      </ul>
    </div>

    <div className='space-x-12 hidden lg:flex items-center'>
      <button className="bg-secondary py-2 px-4 transition-all duration-300 text-white rounded hover:text-white hover:bg-indigo-600">
        Iniciar sesión
      </button>
    </div>

    <div className='lg:hidden'>
      <button onClick={togglerMenu} className='text-primary focus:outline-none focus:text-gray-300'>
        {isMenuOpen ? <FaXmark className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
      </button>
    </div>
  </div>
</nav>


      {/* Menú móvil */}
      <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl fixed top-0 right-0 left-0 h-screen z-40 transition-transform transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        {navItems.map(({ link, path, type }) => (
          type === "scroll" ? (
            <ScrollLink
              activeClass='active' spy={true} smooth={true} offset={-80} key={link}
              to={path} className='block hover:text-gray-300 text-white'
              onClick={togglerMenu}
            >
              {link}
            </ScrollLink>
          ) : (
            <RouterLink
              to={path}
              key={link}
              className='block hover:text-gray-300 text-white'
              onClick={togglerMenu}
            >
              {link}
            </RouterLink>
          )
        ))}
        <button className="w-full text-white bg-primary py-2 px-4 transition-all duration-300 rounded hover:bg-indigo-600 mt-4">
          Iniciar sesión
        </button>
      </div>
    </>
  );
};

export default Navbar;
