import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  role: 'user' | 'admin';
  progress: {
    completedExercises: number[];
    completedChallenges: number[];
    totalPoints: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  updateProgress: (exerciseId?: number, challengeId?: number, points?: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    // TODO: Implement actual authentication logic
    // This is a mock implementation
    if (username === 'admin' && password === 'password') {
      setUser({ id: '1', username: 'admin', role: 'admin', progress: { completedExercises: [], completedChallenges: [], totalPoints: 0 } });
    } else if (username === 'user' && password === 'password') {
      setUser({ id: '2', username: 'user', role: 'user', progress: { completedExercises: [], completedChallenges: [], totalPoints: 0 } });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateProgress = (exerciseId?: number, challengeId?: number, points: number = 0) => {
    if (user) {
      const updatedUser = { ...user };
      if (exerciseId && !updatedUser.progress.completedExercises.includes(exerciseId)) {
        updatedUser.progress.completedExercises.push(exerciseId);
      }
      if (challengeId && !updatedUser.progress.completedChallenges.includes(challengeId)) {
        updatedUser.progress.completedChallenges.push(challengeId);
      }
      updatedUser.progress.totalPoints += points;
      setUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProgress }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};