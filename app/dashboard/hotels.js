// app/components/dashboard/hotels.js

import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import ListeHotelPage from '../components/ListeHotel';

const HotelsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <ListeHotelPage />
    </div>
  );
};

export default HotelsPage;
