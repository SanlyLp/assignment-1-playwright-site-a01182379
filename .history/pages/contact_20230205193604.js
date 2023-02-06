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
    <>
    </>

  )
}

export default Contact;

