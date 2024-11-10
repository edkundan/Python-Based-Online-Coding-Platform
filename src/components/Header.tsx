import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Home, Trophy, Award, Settings, LogIn, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Code2 size={24} />
              <span>PythonLearn</span>
            </Link>
          </li>
          <div className="flex space-x-4">
            <li>
              <Link to="/" className="flex items-center space-x-1 hover:text-blue-200">
                <Home size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/exercises" className="flex items-center space-x-1 hover:text-blue-200">
                <Code2 size={18} />
                <span>Exercises</span>
              </Link>
            </li>
            <li>
              <Link to="/challenges" className="flex items-center space-x-1 hover:text-blue-200">
                <Trophy size={18} />
                <span>Challenges</span>
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-blue-200">
                <Award size={18} />
                <span>Leaderboard</span>
              </Link>
            </li>
            {user && user.role === 'admin' && (
              <li>
                <Link to="/admin" className="flex items-center space-x-1 hover:text-blue-200">
                  <Settings size={18} />
                  <span>Admin</span>
                </Link>
              </li>
            )}
            {user ? (
              <li>
                <button onClick={logout} className="flex items-center space-x-1 hover:text-blue-200">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="flex items-center space-x-1 hover:text-blue-200">
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;