import Banner from '../shared/Banner';
import logo from '../assets/logoDe4.png';

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 " id='home'>
            <Banner banner={logo} heading="Lee como nunca antes Vive la historia"
            subheading="En nuestra plataforma de lectura inmersiva, cada página es una experiencia.
            Explora libros de ciencia ficción con ilustraciones interactivas, sonidos, animaciones y mucho más."
            bt1={'Descubre tu próxima historia ahora'}/>
        </div>
    );
}
export default Home;