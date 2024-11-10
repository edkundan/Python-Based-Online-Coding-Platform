import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to PythonLearn</h1>
      <p className="text-xl mb-8">Improve your Python skills with interactive exercises and challenges</p>
      <div className="flex justify-center space-x-4">
        <Link to="/exercises" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Code2 className="mr-2" />
          Start Exercises
        </Link>
        <Link to="/challenges" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Trophy className="mr-2" />
          Try Challenges
        </Link>
      </div>
    </div>
  );
};

export default Home;