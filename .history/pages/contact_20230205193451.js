/*import React, { useState } from 'react';


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
         First Name: 
          <input type="text" id="name"/>
        </label>
      </div>
      <div>
      <label>
          Last Name: 
          <input type="text" id="name"/>
        </label>
      </div>
      {error && <div>{error}</div>}
      <button type="submit" style={{ display: error ? 'none' : 'block' }}>Submit</button>
    </form>
  )
}

export default Contact; */

import React, { useState } from 'react';
import Head from 'next/head';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email is invalid');
      return;
    }
    setError('');
    // Perform additional actions such as sending the form data to a server, etc.
  };

  return (
    <div>
      <Head>
        <title>Contact Page</title>
      </Head>
      <h1>Welcome to the Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" disabled={!email || error}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
