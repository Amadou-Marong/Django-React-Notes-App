import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPlus, FaTags, FaList } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-lg border-b border-gray-300">
      <ul className="hidden md:flex space-x-4 justify-center items-center gap-6">
        <li>
          <Link to="/" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
            <FaHome /> 
          </Link>
        </li>
        <li>
          <Link to="/about" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
            <FaInfoCircle /> 
          </Link>
        </li>
        <li>
          <Link to="/add" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
            <FaPlus /> 
          </Link>
        </li>
        <li>
          <Link to="/add-category" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
            <FaTags /> 
          </Link>
        </li>
        <li>
          <Link to="/categories" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
            <FaList /> 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;