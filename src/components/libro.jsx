import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useNavigate } from 'react-router-dom';
import PaginaLibro from './PaginaLibro';
import paginas from './data/paginasLibro';
import {
  FaSun, FaMoon, FaHighlighter,
  FaChevronLeft, FaChevronRight,
  FaArrowLeft, FaPlus, FaMinus
} from 'react-icons/fa';

const LibroLectura = () => {
  const [paginaActual, setPaginaActual] = useState(0);
  const [tamanoFuente, setTamanoFuente] = useState(16);
  const [modoOscuro, setModoOscuro] = useState(false);
  const [resaltarTexto, setResaltarTexto] = useState(false);
  const [fondoGlobal, setFondoGlobal] = useState(''); // <- Nuevo
  const navigate = useNavigate();

  const avanzarPagina = () => {
    if (paginaActual < paginas.length - 1) setPaginaActual(paginaActual + 1);
  };

  const retrocederPagina = () => {
    if (paginaActual > 0) setPaginaActual(paginaActual - 1);
  };

  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      animate="show"
      className={`mt-16 min-h-screen px-4 md:px-14 py-6 max-w-screen-2xl mx-auto transition-all duration-300 ease-in-out 
        ${fondoGlobal || (modoOscuro ? 'bg-[#1e1e1e] text-white' : 'bg-white text-gray-900')}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 md:px-10 mb-4">
        <button onClick={() => navigate('/biblioteca')} className="text-gray-500 hover:text-black dark:hover:text-white transition text-xl">
          <FaArrowLeft />
        </button>

        <div className="flex gap-4 text-xl">
          <button onClick={() => setTamanoFuente(prev => Math.min(prev + 2, 26))} title="Aumentar fuente" className="text-gray-600 hover:text-primary">
            <FaPlus />
          </button>
          <button onClick={() => setTamanoFuente(prev => Math.max(prev - 2, 12))} title="Reducir fuente" className="text-gray-600 hover:text-primary">
            <FaMinus />
          </button>
          <button onClick={() => setModoOscuro(prev => !prev)} title="Modo oscuro/claro" className="text-gray-600 hover:text-primary">
            {modoOscuro ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setResaltarTexto(prev => !prev)}
            title="Resaltar texto"
            className={`transition ${resaltarTexto ? 'text-yellow-500' : 'text-gray-600'} hover:text-primary`}
          >
            <FaHighlighter />
          </button>
        </div>
      </div>

      {/* Zona principal */}
      <div className="relative flex items-center justify-center">
        <button onClick={retrocederPagina} className="absolute left-0 z-10 p-4 text-2xl text-gray-400 hover:text-primary transition" aria-label="Anterior">
          <FaChevronLeft />
        </button>

        <div className="max-w-2xl w-full px-4">
          <PaginaLibro
            {...paginas[paginaActual]}
            tamanoFuente={tamanoFuente}
            resaltarTexto={resaltarTexto}
            modoOscuro={modoOscuro}
            setFondoGlobal={setFondoGlobal}
          />
        </div>

        <button onClick={avanzarPagina} className="absolute right-0 z-10 p-4 text-2xl text-gray-400 hover:text-primary transition" aria-label="Siguiente">
          <FaChevronRight />
        </button>
      </div>
    </motion.div>
  );
};

export default LibroLectura;
