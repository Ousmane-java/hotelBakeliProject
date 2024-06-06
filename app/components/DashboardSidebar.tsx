import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #55595C;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2rem;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.2rem;

  div {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
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

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileName = styled.p`
  margin: 0;
`;

const OnlineStatus = styled.span`
  color: green;
  font-size: 0.9rem;
`;

const DashboardSidebar = () => {
  const [user, setUser] = useState<{ nom: string | null; email: string | null }>({ nom: null, email: null });

  useEffect(() => {
    const userDataString = localStorage.getItem('user');
    if (userDataString !== null) {
      try {
        const userData = JSON.parse(userDataString);
        setUser(userData);
      } catch (error) {
        console.error('Erreur lors de la conversion des données JSON :', error);
      }
    } else {
      console.warn('Aucune donnée utilisateur n\'a été trouvée dans le stockage local.');
    }
  }, []);

  return (
    <SidebarContainer>
      <div>
        <SidebarTitle>RED PRODUCT</SidebarTitle>
        <SidebarItem>
        <Link href="/dashboard" passHref>
  <a>
    <div>
      <Icon src="/dashboard-icon.png" alt="Dashboard Icon" />
      Dashboard
    </div>
  </a>
</Link>
        </SidebarItem>
        <SidebarItem>
        <Link href="/dashboard/hotels">
          <a>Liste des Hôtels</a>
        </Link>
        </SidebarItem>
      </div>
      <ProfileContainer>
        <ProfileImage src="/profile.jpg" alt="Profile" />
        <ProfileDetails>
          <ProfileName>{user.nom || ''}</ProfileName>
          <OnlineStatus>En ligne</OnlineStatus>
        </ProfileDetails>
      </ProfileContainer>
    </SidebarContainer>
  );
};

export default DashboardSidebar;
