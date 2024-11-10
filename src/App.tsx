import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import AdminPanel from './pages/AdminPanel';
import { AuthProvider } from './components/AuthContext';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;