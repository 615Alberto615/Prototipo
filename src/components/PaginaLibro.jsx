import { useRef, useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';
import sonidoPasos from '../assets/sounds/pasos-arena.mp3';
import sonidoViento from '../assets/sounds/viento-zumbido.mp3';

const PaginaLibro = ({
  titulo,
  contenido,
  tamanoFuente,
  resaltarTexto,
  modoOscuro = false,
  interacciones = [],
  setFondoGlobal,
}) => {
  const contenidoRef = useRef(null);
  const [modal, setModal] = useState(null);
  const [audiosActivos, setAudiosActivos] = useState([]);

  const [playPasos, { stop: stopPasos }] = useSound(sonidoPasos, { volume: 0.7 });
  const [playViento, { stop: stopViento }] = useSound(sonidoViento, { volume: 0.5 });

  const playById = useCallback(
    (id) => {
      if (id === 'int1') playPasos();
      if (id === 'int2') playViento();
    },
    [playPasos, playViento]
  );

  const resaltarSeleccion = () => {
    if (!resaltarTexto) return;
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();
    if (!selectedText) return;

    const commonAncestor = range.commonAncestorContainer;
    const parent = commonAncestor.nodeType === 3 ? commonAncestor.parentNode : commonAncestor;

    if (parent.tagName === 'SPAN' && parent.classList.contains('resaltado')) {
      const textNode = document.createTextNode(parent.textContent);
      parent.replaceWith(textNode);
      return;
    }

    const span = document.createElement('span');
    span.className = 'resaltado bg-yellow-200 dark:bg-yellow-500 text-black rounded px-1';
    span.textContent = selectedText;

    range.deleteContents();
    range.insertNode(span);
  };

  const procesarInteracciones = (textoPlano) => {
    let nuevoHTML = textoPlano;
    interacciones.forEach((inter) => {
      const uid = `btn-${inter.id}`;
      const marcador = `<div id="marcador-${inter.id}" class="mt-4"></div>`;
      const htmlBoton = `<button id="${uid}" class="ml-1 text-xs bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full hover:text-black">●</button>`;
      nuevoHTML = nuevoHTML.replace(inter.activarEn, `${inter.activarEn}${htmlBoton}${marcador}`);
    });
    return nuevoHTML;
  };

  const activarInteraccion = useCallback(
    (inter) => {
      if (inter.accion?.sonido) {
        const audio = new Audio(inter.accion.sonido);
        audio.volume = 0.5;
        audio.play();
        setAudiosActivos((prev) => [...prev, audio]);
      } else {
        playById(inter.id);
      }

      if (inter.tipo === 'fondo-sonido') {
        setFondoGlobal?.(inter.accion.fondo);
      }

      if (inter.tipo === 'imagen-hover-cambio') {
        const marcador = document.getElementById(`marcador-${inter.id}`);
        if (marcador && !marcador.hasChildNodes()) {
          const img = document.createElement('img');
          img.src = inter.accion.imagenInicial;
          img.alt = inter.accion.descripcion;
          img.className = 'rounded-xl w-full max-h-[300px] object-cover transition-transform duration-300';
          img.onmouseenter = () => (img.src = inter.accion.imagenClick);
          img.onmouseleave = () => (img.src = inter.accion.imagenInicial);
          marcador.appendChild(img);

          const desc = document.createElement('p');
          desc.textContent = inter.accion.descripcion;
          desc.className = 'text-sm text-center text-gray-500 mt-2';
          marcador.appendChild(desc);
        }
      }

      if (inter.tipo === 'modal') {
        setFondoGlobal?.(inter.accion.fondo);
        const marcador = document.getElementById(`marcador-${inter.id}`);
        if (inter.accion.imagen && marcador && !marcador.hasChildNodes()) {
          const img = document.createElement('img');
          img.src = inter.accion.imagen;
          img.alt = inter.accion.titulo;
          img.className = 'w-50 mx-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition duration-300';
          img.onclick = () =>
            setModal({
              titulo: inter.accion.titulo,
              contenido: inter.accion.contenido,
            });
          marcador.appendChild(img);
        } else {
          setModal({
            titulo: inter.accion.titulo,
            contenido: inter.accion.contenido,
          });
        }
      }
    },
    [playById, setFondoGlobal]
  );

  useEffect(() => {
    setFondoGlobal?.('');
    stopPasos();
    stopViento();
    audiosActivos.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    setAudiosActivos([]);
    setModal(null);
  }, [titulo]);

  useEffect(() => {
    interacciones.forEach((inter) => {
      const el = document.getElementById(`btn-${inter.id}`);
      if (el) el.onclick = () => activarInteraccion(inter);
    });
  }, [interacciones, activarInteraccion]);

  const cerrarModalClickFuera = (e) => {
    if (e.target.id === 'overlay') {
      setModal(null);
    }
  };

  return (
    <div
      className={`shadow-2xl rounded-2xl p-8 backdrop-blur-lg bg-opacity-90 transition-all duration-700 ${
        modoOscuro ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">{titulo}</h2>

      <div
        ref={contenidoRef}
        className="text-justify whitespace-pre-wrap"
        style={{ fontSize: `${tamanoFuente}px`, lineHeight: '1.6' }}
        onMouseUp={resaltarSeleccion}
        dangerouslySetInnerHTML={{ __html: procesarInteracciones(contenido) }}
      />

      {modal && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={cerrarModalClickFuera}
        >
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-6 relative">
            <h2 className="text-xl font-bold mb-2 text-primary">{modal.titulo}</h2>
            <p className="text-gray-700">{modal.contenido}</p>
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginaLibro;
