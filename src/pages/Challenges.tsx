import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext';

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  points: number;
}

const challenges: Challenge[] = [
  { id: 1, title: 'Fibonacci Sequence', description: 'Generate the first N numbers of the Fibonacci sequence.', difficulty: 'Easy', category: 'Algorithms', points: 50 },
  { id: 2, title: 'Prime Number Generator', description: 'Create a function that generates prime numbers up to a given limit.', difficulty: 'Medium', category: 'Mathematics', points: 100 },
  { id: 3, title: 'Binary Search Tree Implementation', description: 'Implement a binary search tree with insert, delete, and search operations.', difficulty: 'Hard', category: 'Data Structures', points: 200 },
  { id: 4, title: 'Palindrome Checker', description: 'Write a function to check if a given string is a palindrome.', difficulty: 'Easy', category: 'Strings', points: 50 },
  { id: 5, title: 'Merge Sort Implementation', description: 'Implement the merge sort algorithm.', difficulty: 'Medium', category: 'Algorithms', points: 100 },
];

const Challenges: React.FC = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState({ difficulty: 'All', category: 'All' });

  const filteredChallenges = challenges.filter(challenge => 
    (filter.difficulty === 'All' || challenge.difficulty === filter.difficulty) &&
    (filter.category === 'All' || challenge.category === filter.category)
  );

  const categories = Array.from(new Set(challenges.map(c => c.category)));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Python Challenges</h1>
      <div className="mb-4 flex space-x-4">
        <div>
          <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700">
            Difficulty:
          </label>
          <select
            id="difficulty-filter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={filter.difficulty}
            onChange={(e) => setFilter({ ...filter, difficulty: e.target.value })}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <select
            id="category-filter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="All">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <ul className="space-y-4">
        {filteredChallenges.map((challenge) => (
          <li key={challenge.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{challenge.title}</h2>
            <p className="text-gray-600 mb-2">{challenge.description}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                  challenge.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                  'bg-red-200 text-red-800'
                }`}>
                  {challenge.difficulty}
                </span>
                <span className="ml-2 text-sm text-gray-500">{challenge.category}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-indigo-600">{challenge.points} points</span>
                <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded text-sm">
                  {user?.progress.completedChallenges.includes(challenge.id) ? 'Completed' : 'Start Challenge'}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;