import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

// Componentes generales
import Home from './components/Home';
import Informacion from './components/Informacion';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Fotter from './components/Fotter';
import LogIn from './components/LogIn';
import Recuperar from './components/RecuperarContra.jsx';
import ChatBox from './components/ChatBox';
import Navbar from './components/Navbar';
import NavbarMinimal from './components/NavbarMinimal';

// Componentes logeado
import Horarios from './components/logeado/Horarios';
import ConsultaForm from './components/logeado/ConsultaForm';
import Info from './components/logeado/Info.jsx';
import SeleccionarHor from './components/logeado/SeleccionarHor.jsx';
import CitasEst from './components/logeado/CitasEst.jsx';
import Consultas2 from './components/logeado/Consultas2.jsx';
import Historial from './components/logeado/historial.jsx';
import PerfilEstudiante from "./components/logeado/perfilest.jsx";


import Biblioteca from './components/biblioteca';
import LibroLectura from './components/libro';
function App() {
  const location = useLocation();

  const renderNavbar = () => {
    const path = location.pathname;

    if (path === '/login' || path === '/register') {
      return null;
    }

    if (path === '/consultas' || path === '/biblioteca' || path === '/libro') {
      return <NavbarMinimal />;
    }

    return <Navbar />;
  };

  return (
    <>
      {renderNavbar()}
      <div className="ml-0">
        <Routes>
          <Route path="/" element={<><Home /><Informacion /><About /><Newsletter /><Fotter /></>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/recuperar" element={<Recuperar />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/formConsulta" element={<ConsultaForm />} />
          <Route path="/infolog" element={<Info />} />
          <Route path="/seleccionarhor" element={<SeleccionarHor />} />
          <Route path="/consultas" element={<><CitasEst /><Consultas2 /></>} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/perfil" element={<PerfilEstudiante />} />
          <Route path="/biblioteca" element={<Biblioteca />} /> 
          <Route path="/logout" element={<><Navbar /><Home /><Informacion /><About /><Newsletter /><Fotter /></>} />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
          <Route path="/libro" element={<LibroLectura />} />

        </Routes>
      </div>
      <ChatBox />
    </>
  );
}

export default App;
