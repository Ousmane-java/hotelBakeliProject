import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { NextRouter } from 'next/router';
import { useRouter } from 'next/navigation';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: black;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const handleLogout = async (router: NextRouter | string[]) => {
  try {
    await axios.post('/api/logout');
    await axios.post('/api/clear-session');
  } catch (error) {
    console.error('Erreur lors de la déconnexion :', error);
  }

  router.push('/login');
};

const LogoutButton = () => {
  const router = useRouter();

  const handleClick = () => {
    handleLogout(router);
  };

  return (
    <Icon src="/logout-icon.png" alt="Logout" onClick={handleClick} />
  );
};

const DashboardHeader = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <HeaderTitle style={{ color: 'black' }}>Dashboard</HeaderTitle>
      <ProfileContainer>
        <SearchInput type="text" placeholder="Rechercher..." />
        <Icon src="/notification-icon.jpeg" alt="Notifications" />
        <ProfileImage src="/profile.JPG" alt="Profile" />
        <LogoutButton /> {/* Utilisation du composant LogoutButton */}
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default DashboardHeader;
