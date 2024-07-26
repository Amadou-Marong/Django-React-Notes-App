import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-lg border-b border-gray-300">
        <ul className="flex justify-center space-x-4">
            <li>
            {/* <a href="/" className="font-bold text-gray-400">Home</a> */}
            <Link to="/" className="font-bold text-gray-400">Home</Link>
            </li>
            <li>
            {/* <a href="/about" className="font-bold text-gray-400">About</a> */}
            <Link to="/about" className="font-bold text-gray-400">About</Link>
            </li>
            <li>
            {/* <a href="/add" className="font-bold text-gray-400">Add Note</a> */}
            <Link to="/add" className="font-bold text-gray-400">Add Note</Link>
            </li>
            <li>
            <Link to="/add-category" className="font-bold text-gray-400">Add Category</Link>
            </li>
            <li>
            <Link to="/categories" className="font-bold text-gray-400">Categories</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar