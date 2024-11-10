import React, { useState } from 'react';
import { Users, BookOpen, Settings } from 'lucide-react';
import { useAuth } from '../components/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'content':
        return <ContentManagement />;
      case 'settings':
        return <SystemSettings />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <div className="flex mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded-t-lg ${
            activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('users')}
        >
          <Users className="inline-block mr-1" size={18} /> Users
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded-t-lg ${
            activeTab === 'content' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('content')}
        >
          <BookOpen className="inline-block mr-1" size={18} /> Content
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings className="inline-block mr-1" size={18} /> Settings
        </button>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-md">{renderContent()}</div>
    </div>
  );
};

const UserManagement: React.FC = () => {
  const [users] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', role: 'user' },
    { id: 2, username: 'user2', email: 'user2@example.com', role: 'user' },
    { id: 3, username: 'admin', email: 'admin@example.com', role: 'admin' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                <button className="ml-2 text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ContentManagement: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Content Management</h2>
    <p>Here you can manage exercises and challenges.</p>
    {/* Add content management functionality here */}
  </div>
);

const SystemSettings: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">System Settings</h2>
    <p>Configure system-wide settings here.</p>
    {/* Add system settings functionality here */}
  </div>
);

export default AdminPanel;