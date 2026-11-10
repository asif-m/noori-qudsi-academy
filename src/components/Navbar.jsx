import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-3 bg-yellow-300 px-2 sm:px-4">
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 min-w-0"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain shrink-0" />
          <div className="min-w-0 leading-tight">
            <p className="text-green-700 text-xs sm:text-base md:text-[20px] font-bold cursor-pointer truncate">
              NOORI QUDSI ACADEMY
            </p>
            <p className="text-green-800 text-[10px] sm:text-xs md:text-sm font-semibold cursor-pointer truncate">
              Manteca Jama Masjid
            </p>
          </div>
        </Link>
        <button className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-800 rounded shrink-0 whitespace-nowrap'>
          <a href={`#donate`}>Donate</a>
        </button>
      </div>
    </nav>

  );
};

export default Navbar;
