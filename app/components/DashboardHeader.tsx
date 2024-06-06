import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white; /* Changement de la couleur de la barre en blanc */
  color: black; /* Changement de la couleur du texte en noir */
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

const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <HeaderTitle style={{ color: 'black' }}>Dashboard</HeaderTitle> {/* Changement de la couleur du texte "Dashboard" en noir */}
      <ProfileContainer>
        <SearchInput type="text" placeholder="Rechercher..." />
        <Icon src="/notification-icon.jpeg" alt="Notifications" />
        <ProfileImage src="/profile.JPG" alt="Profile" />
        <Icon src="/logout-icon.jpeg" alt="Logout" />
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default DashboardHeader;
