import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import { styles } from '../styles';

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 bg-yellow-300 z-50`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-green-700 text-base sm:text-sm-[16px] md:text-[20px] lg:text-[20px] font-bold cursor-pointer flex">
            NOORI QUDSI ACADEMY
          </p>
        </Link>
        <button className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-800 rounded'>
          <a href={`#donate`}>Donate</a>
        </button>
      </div>
    </nav>

  );
};

export default Navbar;
