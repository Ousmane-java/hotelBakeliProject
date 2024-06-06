"use client";
import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import styled from 'styled-components';

// Exemple de données d'hôtels
const hotels = [
  { image: '/hotel1.jpg', title: 'Hôtel 1', description: 'Description de l\'hôtel 1' },
  { image: '/hotel2.jpg', title: 'Hôtel 2', description: 'Description de l\'hôtel 2' },
  // Ajoutez d'autres hôtels selon vos données
];

const PageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
`;

const ListeHotelPage = () => {
  return (
    <PageContainer>
      <DashboardSidebar />
      <MainContent>
        <DashboardHeader />
        <h1>Liste des Hôtels</h1>
        <div>
          {hotels.map((hotel, index) => (
            <div key={index}>
              <img src={hotel.image} alt={hotel.title} />
              <h2>{hotel.title}</h2>
              <p>{hotel.description}</p>
            </div>
          ))}
        </div>
      </MainContent>
    </PageContainer>
  );
};

export default ListeHotelPage;
