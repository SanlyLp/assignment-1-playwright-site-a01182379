import React, { useState } from 'react';
export default function About() {
    return (
      <>
        <Head>
          <title>About Us</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        </main>
      </>
    )
  }



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
      {error && <div>{error}</div>}
      <button type="submit" style={{ display: error ? 'none' : 'block' }}>Submit</button>
    </form>
  );
};

export default Contact;
