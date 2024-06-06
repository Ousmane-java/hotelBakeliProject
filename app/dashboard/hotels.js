import React from 'react';
import DashboardHeader from '../component/DashboardHeader';
import DashboardSidebar from '../component/DashboardSidebar';
import HotelCard from '../component/HotelCard';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const hotelData = [
  { image: '/hotel1.jpg', title: 'Hotel 1', description: 'Description de l\'hôtel 1' },
  { image: '/hotel2.jpg', title: 'Hotel 2', description: 'Description de l\'hôtel 2' },
  { image: '/hotel3.jpg', title: 'Hotel 3', description: 'Description de l\'hôtel 3' },
  { image: '/hotel4.jpg', title: 'Hotel 4', description: 'Description de l\'hôtel 4' },
  { image: '/hotel5.jpg', title: 'Hotel 5', description: 'Description de l\'hôtel 5' },
  { image: '/hotel6.jpg', title: 'Hotel 6', description: 'Description de l\'hôtel 6' },
  // Ajoutez plus de données d'hôtels ici
];

const ListeHotelPage = () => {
  return (
    <PageContainer>
      <DashboardSidebar />
      <MainContent>
        <DashboardHeader />
        <h1>Liste des Hôtels</h1>
        <CardsContainer>
          {hotelData.map((hotel, index) => (
            <HotelCard 
              key={index}
              image={hotel.image}
              title={hotel.title}
              description={hotel.description}
            />
          ))}
        </CardsContainer>
      </MainContent>
    </PageContainer>
  );
};

export default ListeHotelPage;
