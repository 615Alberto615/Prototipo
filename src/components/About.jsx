import about from "../assets/about.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
    

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="informacion">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div 
                    variants={fadeIn('right',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="md:w-1/2"
                >
                    <img src={about} alt="Descripción relevante de la imagen" />
                </motion.div>
                <motion.div 
                    variants={fadeIn('left',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="md:w-2/5"
                >
                    <h2 className="md:text-3xl font-bold text-primary mb-5 leading-normal">No solo es lectura,
                    <span className="text-secondary"> es experiencia.</span></h2>
                    <p className="text-tariary text-lg mb-7">Descubre una nueva forma de leer con mundos que cobran vida. Elige tu libro, sumérgete en sonidos, ilustraciones y animaciones interactivas que transforman cada página en una experiencia única.</p>
                    <button className="btnPrimary" >Descubre una Historia</button>
                </motion.div>
            </div> 
        </div>
    );
};

export default About;
