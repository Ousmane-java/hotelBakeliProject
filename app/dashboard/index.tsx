import React from 'react';
import { useRouter } from 'next/router';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import ListeHotel from '../components/ListeHotel';

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      {router.pathname === '/dashboard' && <p>Contenu spécifique du tableau de bord</p>}
      {router.pathname === '/dashboard/hotels' && <ListeHotel />}
    </div>
  );
};

export default DashboardPage;
