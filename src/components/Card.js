import React from "react";
import styled from "styled-components";
import image from "../assets/image.png";

function Card() {
  return (
    <CardContainer>
      <CardContent>
        <img src={image} alt="hotel-card" />
        <CardInfo>
          <Title>Voyage Hotel</Title>
          <Score>
            <Subtitle>9.7 Puan</Subtitle>
          </Score>
          <RateContainer>
            <RateUp>Puan Artır</RateUp>
            <RateDown>Puan Azalt</RateDown>
          </RateContainer>
        </CardInfo>
      </CardContent>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  max-width: 500px;
  width: calc(100% - 50px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-top: 8px;
    margin-left: 8px;
    margin-bottom: 8px;
  }
`;

const CardContent = styled.div`
  display: flex;
`;

const CardInfo = styled.div`
  margin-top: 8px;
  margin-left: 16px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
`;

const Score = styled.div`
  background-color: hsl(214 64% 98%);
  border-radius: 5px;
  margin-top: 8px;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  color: turquoise;
  margin-left: 8px;
`;

const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const RateUp = styled.button`
  font-size: 14px;
  padding: 0.25em 1em;
  border: 1px solid #056bfd;
  border-radius: 5px;
  background-color: #fff;
  color: #056bfd;
`;

const RateDown = styled.button`
  font-size: 14px;
  padding: 0.25em 1em;
  border: 1px solid #056bfd;
  border-radius: 5px;
  margin-left: 8px;
  background-color: #fff;
  color: #056bfd;
`;

export default Card;
