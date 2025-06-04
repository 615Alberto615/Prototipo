import dunasHover from '../../assets/images/dunas-hover.png';
import dunasHoverActiva from '../../assets/images/dunas-hover-activa.png';
import sonidoPasos from '../../assets/sounds/pasos-arena.mp3';
import sonidoViento from '../../assets/sounds/viento-zumbido.mp3';
import ojosFremen from '../../assets/images/ojos-fremen.png';
const paginas = [
  {
    id: 1,
    titulo: 'PÁGINA 1 – Las Sombras del Desierto',
    contenido: `El viento del desierto golpeaba con insistencia las rocas desnudas. La arena crujía bajo las botas mientras Paul y Jessica avanzaban, sus rostros cubiertos por los velos del destiltraje, los ojos irritados por la sequedad y el brillo opaco del cielo anaranjado.

Paul sintió cómo el aire se volvía más denso, impregnado de especia. Era una dulzura pesada, como si el propio mundo respirara con dificultad.

Entonces, lo vio.

Figuras emergieron de las sombras, como si la piedra hubiera cobrado vida. Eran altos, silenciosos, envueltos en capas oscuras que se confundían con el entorno. Sus ojos, totalmente azules, lo observaban con intensidad.

Una voz seca y profunda resonó entre las rocas:

—No den un paso más. Quítense los destiltrajes. Lento.

Jessica se tensó. Paul dio un paso al frente, pero no alcanzó a hablar.

Otra figura apareció. Su presencia era imponente. No llevaba armas visibles, pero todos los demás fremen parecían girar en torno a él como satélites.

—Soy Stilgar, naib del sietch Tabr —dijo—. Si son espías, no vivirán para contarlo.`,

    interacciones: [
      {
        id: 'int1',
        tipo: 'fondo-sonido',
        activarEn: 'Era una dulzura pesada, como si el propio mundo respirara con dificultad.',
        accion: {
          fondo: 'bg-gradient-to-t from-[#D5C3A3] via-[#736D7E] to-[#2C3A4F]',
          texto: 'text-gray-900',
          sonido: sonidoPasos
        }
      },
      {
        id: 'int2',
        tipo: 'imagen-hover-cambio',
        activarEn: 'Sus ojos, totalmente azules, lo observaban con intensidad.',
        accion: {
          imagenInicial: dunasHover,
          imagenClick: dunasHoverActiva,
          sonido: sonidoViento
        }
      },
      {
        id: 'int3',
        tipo: 'modal',
        activarEn: 'todos los demás fremen parecían girar en torno a él como satélites.',
        accion: {
          puntoInteractivo: 'ojos',
          titulo: 'La mirada azul-azul',
          contenido: 'El contacto prolongado con la especia hace que los fremen desarrollen una pigmentación completa azul en ojos, tanto iris como esclerótica. Es un símbolo de identidad y adaptación.',
          imagen: ojosFremen,
          sonido: sonidoViento,
          fondo: 'bg-gradient-to-t from-[#2C3A4F] via-[#736D7E] to-[#D5C3A3]',
        }
      }
    ]
  },
  {
    id: 2,
    titulo: 'PÁGINA 2 – Bajo el juicio de Stilgar',
    contenido: `Jessica inclinó la cabeza ligeramente.

—Somos enemigos del Harkonnen —dijo con voz firme—. Huimos por nuestras vidas. No venimos a profanar nada.

Stilgar la observó en silencio, su mirada dura como la piedra.

—La mujer habla con verdad —dijo finalmente—. Pero la verdad no basta en el desierto.

Uno de los guerreros fremen dio un paso al frente, desenfundando con fluidez un cuchillo curvo y traslúcido, hecho de cristal de arena.

—Una prueba —dijo—. De honor y valor.

Paul sintió el sudor en sus palmas. Dio un paso al frente, sin quitar los ojos del fremen.

—No busco pelea, pero la acepto si es el precio de vivir.

El fremen sonrió levemente. Stilgar levantó la mano.

—Basta. El muchacho tiene la mirada de quien ha perdido mucho y aún camina. Esa es la mirada que necesitamos.`
  },
  {
    id: 3,
    titulo: 'PÁGINA 3 – El juicio se suspende',
    contenido: `Jessica se adelantó un paso.

—Mi hijo no es un muchacho ordinario. En él hay sangre real, y entrenamiento Bene Gesserit. No les será inútil.

Un murmullo recorrió al grupo fremen.

—Bene Gesserit… —susurró uno.

Stilgar entrecerró los ojos, escudriñándola como si intentara leer su alma.

—¿Puedes matarme sin moverte? —preguntó con un tono que no era del todo en broma.

—Podría —respondió Jessica con calma.

Y lo creían. El silencio volvió, pero ya no era tenso. Era respeto.`
  },
  {
    id: 4,
    titulo: 'PÁGINA 4 – Aceptados',
    contenido: `Stilgar dio un paso atrás.

—Vendrán con nosotros. El desierto es cruel, pero más cruel es rechazar aliados cuando sopla el viento de guerra.

Uno a uno, los fremen comenzaron a moverse, desapareciendo entre las rocas, como si nunca hubieran estado ahí.

Paul y Jessica siguieron al grupo, sus pies hundiéndose en la arena suave que aún conservaba el calor del día.

En el cielo, dos lunas asomaban. Paul las observó mientras avanzaban, preguntándose si estaba caminando hacia su destino… o hacia su destrucción.`
  },
  {
    id: 5,
    titulo: 'PÁGINA 5 – En la senda del sietch',
    contenido: `La marcha fue silenciosa, interrumpida solo por el sonido rítmico de los pasos sobre la arena.

Pasaron túneles estrechos, resbaladizos por el polvo seco. Cada rincón parecía contener secretos de generaciones.

Un fremen joven ofreció agua a Jessica con una vasija de piel.

—El agua es vida —dijo con solemnidad.

Jessica asintió. En ese mundo, lo entendía más que nunca.

Paul tocó el muro de roca. Era cálido, vivo, como si el sietch los aceptara lentamente en su vientre.

Y entonces lo oyó: un canto lejano, grave, gutural… un rezo fremen en la lengua antigua, como si la piedra misma rezara por ellos.`
  }
];

export default paginas;
