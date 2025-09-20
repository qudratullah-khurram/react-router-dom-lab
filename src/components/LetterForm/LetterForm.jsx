// src/components/LetterForm/LetterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState(mailboxes[0]?._id || '');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mailbox:
        <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)} required>
          {mailboxes.map(box => (
            <option key={box._id} value={box._id}>
              Box #{box._id} - {box.boxOwner}
            </option>
          ))}
        </select>
      </label>
      <label>
        Recipient:
        <input value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;
