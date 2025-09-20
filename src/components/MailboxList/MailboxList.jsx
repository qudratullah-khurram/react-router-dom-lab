import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>

      {mailboxes.length === 0 ? (
        <p>No mailboxes added.</p> //its not included in assignment
      ) : (
        <div className="mailbox-grid">
          {mailboxes.map(box => (
            <Link to={`/mailboxes/${box._id}`} key={box._id} className="mail-box">
              <p>Box #{box._id}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailboxList;
