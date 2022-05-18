import React, { useState } from "react";
import styled from "styled-components";

function AddHotel() {
  const [show, setShow] = useState(false);
  return (
    <AddHotelContainer>
      <AddHotelHeader>
        <AddButton>+</AddButton>
        <Title>Otel Ekle</Title>
      </AddHotelHeader>
      <Textarea placeholder="Hotel adı giriniz..."></Textarea>
    </AddHotelContainer>
  );
}

const AddHotelContainer = styled.div`
  max-width: 380px;
  width: calc(100% - 30px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const AddHotelHeader = styled.div`
  display: flex;
`;

const AddButton = styled.button`
  color: blue;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #056bfd;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  margin-left: 8px;
`;
const Textarea = styled.textarea`
  resize: none;
  margin-top: 8px;
`;

export default AddHotel;
