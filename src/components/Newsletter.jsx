import Banner from "../shared/Banner";

import ban from "../assets/shareff2.png";
const Newsletter = () => {
  return (
    <div className="md:px-10 p-4 max-w-screen-2xl mx-auto my-12 mt-10">
        <Banner banner={ban} heading="Tu Historia puede Inspirar, tu Lectura puede Guiar" subheading="Ya seas lector o autor, aquí puedes dejar huella.
Comparte una obra, invita a otros a leer contigo, y transforma cada lectura en una experiencia inolvidable." />
    </div>
  );
}
export default Newsletter;