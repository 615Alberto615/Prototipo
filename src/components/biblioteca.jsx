import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ProgressBar from '@ramonak/react-progress-bar';
import dune1 from '../assets/dune.jpg';
import dune2 from '../assets/dune.jpg';
import dune3 from '../assets/dune.jpg';
import { useNavigate } from 'react-router-dom';

const libros = [
  {
    id: 1,
    titulo: 'Dune',
    autor: 'Frank Herbert',
    ilustrador: 'Alberto Encinas',
    imagen: dune1,
    progreso: 20,
    descripcion: 'Una epopeya galáctica de intriga política, religión y poder en un planeta desértico.'
  },
  {
    id: 2,
    titulo: 'Dune: El Mesías de Dune',
    autor: 'Frank Herbert',
    ilustrador: 'Alberto Encinas',
    imagen: dune2,
    progreso: 50,
    descripcion: 'La secuela donde Paul Atreides enfrenta las consecuencias de su dominio.'
  },
  {
    id: 3,
    titulo: 'Dune: Hijos de Dune',
    autor: 'Frank Herbert',
    ilustrador: 'Alberto Encinas',
    imagen: dune3,
    progreso: 80,
    descripcion: 'Los hijos de Paul luchan por mantener el legado mientras enfrentan nuevas amenazas.'
  },
];

const BibliotecaEst = () => {
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView={'show'}
      className="my-0 md:px-14 px-4 max-w-screen-2xl mx-auto mt-20"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="container mx-auto mt-10">
          <div className="text-center">
            <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Tu Biblioteca</h2>
            <p className="text-tartiary md:w-1/3 mx-auto px-4">
              Aquí puedes ver todos tus libros adquiridos.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 mt-6">
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center md:gap-12 gap-8 justify-items-center'>
              {libros.map((libro) => (
                <LibroCard key={libro.id} libro={libro} onClick={() => setLibroSeleccionado(libro)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {libroSeleccionado && (
        <ModalLibro libro={libroSeleccionado} onClose={() => setLibroSeleccionado(null)} />
      )}
    </motion.div>
  );
};

const LibroCard = ({ libro, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 flex flex-col justify-between items-center w-full max-w-xs h-[360px] cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <img
          src={libro.imagen}
          alt={libro.titulo}
          className="w-32 h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-lg font-semibold text-center leading-tight">{libro.titulo}</h3>
        <p className="text-sm text-gray-500">{libro.autor}</p>
      </div>
      <div className="w-full mt-4">
        <ProgressBar
          completed={libro.progreso}
          bgColor="#9A7AF1"
          baseBgColor="#E0E0E0"
          height="15px"
          borderRadius="5px"
          labelAlignment="center"
          labelColor="#fff"
          labelSize="12px"
        />
      </div>
    </div>
  );
};
const ModalLibro = ({ libro, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden animate-fade-in">
        <img src={libro.imagen} alt={libro.titulo} className="w-full md:w-1/3 object-cover h-full" />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-1">{libro.titulo}</h2>
            <p className="text-gray-600 mb-1"><strong>Autor:</strong> {libro.autor}</p>
            <p className="text-gray-600 mb-1"><strong>Ilustrador:</strong> {libro.ilustrador}</p>
            <p className="text-sm text-gray-500 mt-4 mb-2">{libro.descripcion}</p>
            <ProgressBar
              completed={libro.progreso}
              bgColor="#9A7AF1"
              baseBgColor="#E0E0E0"
              height="15px"
              borderRadius="5px"
              labelAlignment="center"
              labelColor="#fff"
              labelSize="12px"
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">Cerrar</button>
            <button onClick={() => navigate('/libro')} className="bg-primary text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
              Seguir leyendo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibliotecaEst;
