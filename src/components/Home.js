import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import AddHotel from "./AddHotel";

function Home() {
  return (
    <HomeContainer>
      <AddHotel />
      <Card />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

export default Home;
