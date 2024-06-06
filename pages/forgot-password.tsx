// pages/forgot-password.tsx

import React from 'react';
import axios from 'axios';

const ForgotPasswordPage: React.FC = () => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/forgot-password', { email: 'user@example.com' });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Forgot Password Page</h1>
      <button onClick={handleSubmit}>Send Password Reset Email</button>
    </div>
  );
};

export default ForgotPasswordPage;
