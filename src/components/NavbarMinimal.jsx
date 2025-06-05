import logo from '../assets/logo.png';

const NavbarMinimal = () => {
  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 z-50'>
      <div className='text-lg container mx-auto flex justify-start items-center font-medium'>
        <a href="/Prototipo" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
  <img src={logo} alt="Logo" className='w-10 inline-block items-center' />
  <span>NEBULA</span>
</a>
      </div>
    </nav>
  );
};

export default NavbarMinimal;
