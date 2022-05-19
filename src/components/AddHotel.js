import React, { useState } from "react";

import styled from "styled-components";

function AddHotel() {
  const [item, setItem] = useState("");

  const handle = () => {
    localStorage.setItem("Hotel", item);
  };

  return (
    <AddHotelContainer>
      <AddHotelHeader>
        <AddButton onClick={handle}>+</AddButton>
        <Title>Hotel Ekle</Title>
      </AddHotelHeader>
      <Textarea
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Hotel adı giriniz..."
      ></Textarea>
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
  outline: none;
  margin-top: 8px;
`;

export default AddHotel;
