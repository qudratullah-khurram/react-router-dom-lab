

import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find(box => box._id === Number(mailboxId));

  if (!mailbox) return <h2>Mailbox Not Found!</h2>;

  const boxLetters = letters.filter(l => l.mailboxId === Number(mailboxId));

  return (
    <div>
      <h2>Mailbox #{mailbox._id}</h2>
      <p>Owner: {mailbox.boxOwner}</p>
      <p>Size: {mailbox.boxSize}</p>

      <h3>Letters</h3>
      {boxLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        <ul>
          {boxLetters.map((l, idx) => (
            <li key={idx}>
              <strong>To:</strong> {l.recipient}<br />
              <strong>Message:</strong> {l.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxDetails;
