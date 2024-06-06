// app/components/ForgotPasswordForm.tsx

"use client";

import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #494C4F;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  text-align: left;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #494C4F;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #3a3c3e;
  }
`;

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/forgot-password', { email });
      alert(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Une erreur est survenue lors de la demande de réinitialisation de mot de passe.');
      }
    }
  };

  return (
    <FormContainer>
      <Title>Mot de passe oublié ?</Title>
      {errorMessage && <p>{errorMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <Button type="submit">Envoyer</Button>
      </Form>
    </FormContainer>
  );
};

export default ForgotPasswordForm;
