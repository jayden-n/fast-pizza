import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Link to="/order/new">
            <Button>Start ordering</Button>
          </Link>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
