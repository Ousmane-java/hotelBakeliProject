
"use client";

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 462px;
  height: 106px;
  top: 211px;
  left: 411px;
  padding: 21.33px 20.97px 20.68px 21.33px;
  gap: 0px;
  border-radius: 14px 0px 0px 0px;
  opacity: 0px;
  box-shadow: 0px 0px 1.33px 0px #00000026;
  background: #FFFFFF;
`;

const CardIcon = styled.img`
  width: 63.99px;
  height: 63.99px;
  top: 21.33px;
  left: 21.33px;
  padding: 20px 19.59px 20px 20px;
  gap: 0px;
  border-radius: 666.56px 0px 0px 0px;
  opacity: 0px;
  background: #A88ADD;
`;

const TextContainer = styled.div`
  width: 334.38px;
  height: 63.18px;
  top: 21.33px;
  left: 106.65px;
  gap: 0px;
  opacity: 0px;
`;

const InfoCard = ({ icon, number, text }) => {
  return (
    <CardContainer>
      <CardIcon src={icon} alt="Icon" />
      <TextContainer>
        <p>{text}</p>
      </TextContainer>
    </CardContainer>
  );
};

export default InfoCard;