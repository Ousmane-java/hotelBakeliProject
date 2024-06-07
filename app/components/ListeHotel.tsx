// app/components/ListeHotelPage.tsx

import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 2rem;
`;

const HotelCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const HotelImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const HotelTitle = styled.h2`
  margin-top: 0;
`;

const HotelDescription = styled.p`
  color: #555;
`;
interface Hotel {
    image: string;
    title: string;
    description: string;
  }
  
  interface ListeHotelProps {
    hotels: Hotel[];
  }


const hotelData = [
  { image: '/Main.png', title: 'Hotel 1', description: 'Description de l\'hôtel 1' },
  { image: '/hotel2.jpg', title: 'Hotel 2', description: 'Description de l\'hôtel 2' },
  // Ajoutez plus de données d'hôtels ici
];

const ListeHotel: React.FC<ListeHotelProps> = ({ hotels }) => {
    return (
      <div>
        <h1>Liste des Hôtels</h1>
        <div>
          {hotels.map((hotel, index) => (
            <HotelCard key={index}>
              <img src={hotel.image} alt={hotel.title} />
              <h2>{hotel.title}</h2>
              <p>{hotel.description}</p>
            </HotelCard>
          ))}
        </div>
      </div>
    );
  };
  
  export default ListeHotel;
  
