import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-600 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">CalorieWise</Link>
        <div>
          <Link to="/login" className="mr-4 text-white">Login</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

