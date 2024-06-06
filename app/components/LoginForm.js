"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #494C4F;
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #494C4F;
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #666;
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

const Links = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { email, mot_de_passe: password });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      router.push('/dashboard');
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    router.push('/forgot-password');
  };

  return (
    <LoginFormContainer>
      <FormWrapper>
        <Title>
          <img src="/logo.jpeg" alt="Icon" width="30" height="30" /> RED PRODUCT
        </Title>
        <Subtitle>Connectez-vous en tant qu'admin</Subtitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Mot de passe:</Label>
            <Input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit">Se connecter</Button>
        </Form>
        <Links>
          <Link href="/forgot-password">Mot de passe oublié ?</Link>
          <Link href="/register">S'inscrire</Link>
        </Links>
      </FormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
