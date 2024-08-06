import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPlus, FaTags, FaList, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className="bg-white p-4 shadow-lg md:hidden trasition-all duration-300">
    
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-gray-600 hover:text-gray-400 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`md:block space-y-4 ${isOpen ? 'block' : 'hidden'} mt-6`}>
            <li className="border-t-2">
                <Link to="/" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
                    <FaHome /> 
                </Link>
            </li>
            <li className="border-t-2">
                <Link to="/about" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
                    <FaInfoCircle /> 
                </Link>
            </li>
            <li className="border-t-2">
                <Link to="/add" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
                    <FaPlus /> 
                </Link>
            </li>
            <li className="border-t-2">
                <Link to="/add-category" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
                    <FaTags /> 
                </Link>
            </li>
            <li className="border-t-2">
                <Link to="/categories" className="font-bold text-gray-600 hover:text-gray-400 text-2xl">
                    <FaList /> 
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar