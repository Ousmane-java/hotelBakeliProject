import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 462px;
  height: 106px;
  padding: 21.33px 20.97px 20.68px 21.33px;
  border-radius: 14px;
  background: #FFFFFF;
  box-shadow: 0px 0px 1.33px 0px #00000026;
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 50px; /* Ajustez la taille de l'image selon vos besoins */
  height: auto;
  margin-right: 20px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Number = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0;
`;

const InfoCard = ({ image, number, text }) => {
  return (
    <CardContainer>
      <div style={{ display: 'flex' }}>
        <CardImage src={image} alt={text} />
        <CardText>
          <Number>{number}</Number>
          <Text>{text}</Text>
        </CardText>
      </div>
    </CardContainer>
  );
};

export default InfoCard;
