// pages/dashboard.js
"use client";

import React from 'react';
import styled from 'styled-components';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';
import InfoCard from '../components/HotelCard';

const DashboardLayout = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
`;

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardSidebar />
      <MainContent>
        <DashboardHeader />
        <div style={{ padding: '2rem' }}>
          <h1>Bienvenue sur RED PRODUCT</h1>
          <p>Bienvenue sur votre tableau de bord.</p>
        </div>
        <CardsContainer>
          <InfoCard image="/span.w-488.png" number="212" text="Hôtels" />
          <InfoCard image="/span.w-48.png" number="1500" text="Utilisateurs" />
          <InfoCard image="/span.w.png" number="320" text="Réservations" />
          
          <InfoCard image="/span.png" number="212" text="Hôtels" />
          <InfoCard image="/span.w1.png" number="1500" text="Utilisateurs" />
          <InfoCard image="/span.w.png" number="320" text="Réservations" />
          {/* Ajoutez plus de cartes selon vos besoins */}
        </CardsContainer>
      </MainContent>
    </DashboardLayout>
  );
};

export default Dashboard;
