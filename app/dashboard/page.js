// app/dashboard/page.js

"use client";

import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #494C4F;
  margin-bottom: 1rem;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Title>Bienvenue sur votre tableau de bord</Title>
      <p>Contenu du tableau de bord ici...</p>
    </DashboardContainer>
  );
};

export default Dashboard;
