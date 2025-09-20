// src/App.jsx

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newBox) => {
    const _id = mailboxes.length + 1;
    setMailboxes([...mailboxes, { _id, ...newBox }]);
  };

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={
          <MailboxDetails mailboxes={mailboxes} letters={letters} />
        } />
        <Route path="/new-letter" element={
          <LetterForm mailboxes={mailboxes} addLetter={addLetter} />
        } />
        <Route path="*" element={<main><h2>Page Not Found</h2></main>} />
      </Routes>
    </div>
  );
}

export default App;
