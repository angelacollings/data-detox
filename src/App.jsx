import React from 'react';
import Profile from './components/Profile';

export default function App() {
  const user = {
    name: 'Donna Sample',
    title: 'Data Guru',
    location: 'Remote',
    bio: 'I help real estate agents make the most of their data.',
    avatar: null,
  };

  return (
    <div className="app-container">
      <header>
        <h1>Profile</h1>
      </header>
      <main>
        <Profile {...user} />
      </main>
    </div>
  );
}
