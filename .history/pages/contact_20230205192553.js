import React, { useState } from 'react';


const emailRegex = /^\S+@\S+\.\S+$/;

const Contact = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInput = (event) => {
    setEmail(event.target.value);
    if (emailRegex.test(event.target.value)) {
      setError('');
    } else {
      setError('Email is invalid');
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={handleInput} required />
      </div>
      <div>
        <label>
          
          <input type="text" id="name" value={Text}/>
        </label>
      </div>
      {error && <div>{error}</div>}
      <button type="submit" style={{ display: error ? 'none' : 'block' }}>Submit</button>
    </form>
  )
}

export default Contact;

