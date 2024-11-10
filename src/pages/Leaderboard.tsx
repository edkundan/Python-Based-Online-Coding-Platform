import React, { useState, useEffect } from 'react';

interface LeaderboardEntry {
  username: string;
  totalPoints: number;
  completedExercises: number;
  completedChallenges: number;
}

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // TODO: Fetch leaderboard data from the server
    // This is a mock implementation
    const mockLeaderboard: LeaderboardEntry[] = [
      { username: 'user1', totalPoints: 500, completedExercises: 10, completedChallenges: 5 },
      { username: 'user2', totalPoints: 450, completedExercises: 9, completedChallenges: 4 },
      { username: 'user3', totalPoints: 400, completedExercises: 8, completedChallenges: 4 },
      { username: 'user4', totalPoints: 350, completedExercises: 7, completedChallenges: 3 },
      { username: 'user5', totalPoints: 300, completedExercises: 6, completedChallenges: 3 },
    ];
    setLeaderboard(mockLeaderboard);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed Exercises</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed Challenges</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leaderboard.map((entry, index) => (
            <tr key={entry.username}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.totalPoints}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.completedExercises}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.completedChallenges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;