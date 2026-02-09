import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import { styles } from '../styles';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-3 bg-yellow-300 px-2 sm:px-4">
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 min-w-0"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain shrink-0" />
          <p className="text-green-700 text-xs sm:text-base md:text-[20px] font-bold cursor-pointer truncate">
            NOORI QUDSI ACADEMY
          </p>
        </Link>
        <button className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-800 rounded shrink-0 whitespace-nowrap'>
          <a href={`#donate`}>Donate</a>
        </button>
      </div>
    </nav>

  );
};

export default Navbar;
